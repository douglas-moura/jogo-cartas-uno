import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, StyleSheet } from "react-native"
import { contexto } from "../../context/GameContext"
import { Partida } from "../../class/PartidaClass"
import { Baralho } from "../../class/BaralhoClass"
import JogadorContainer from "../../components/JogadorContainer"

export default function HomeScreen() {
    const {
        nome,
        partida,
        cartas
    } = contexto()

    if (!partida) {
        return (
            <SafeAreaView style={styles.paginaContainer} edges={['top', 'bottom']}>
                <View>
                    <Text>Nenhuma partida em andamento.</Text>
                </View>
            </SafeAreaView>
        )
    } else {
        const baralhoAtivo = new Baralho(cartas)
        const partidaAtiva = new Partida(nome, baralhoAtivo)

        return (
            <SafeAreaView style={styles.paginaContainer} edges={['top', 'bottom']}>
                <Text>Partida</Text>
                <Text>Vez: {partidaAtiva.getTurno()}</Text>
                <View style={styles.campo}>
                    {partidaAtiva.getJogadores().map((jogador, index) => (
                        <View key={index} style={[
                            styles.playerContainer,
                            styles[`player${index + 1}` as keyof typeof styles]
                        ]}>
                            <JogadorContainer nome={jogador.getNome()} />
                        </View>
                    ))}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    paginaContainer: {
        flex: 1,
        padding: 16,
    },
    campo: {
        backgroundColor: '#0b6623',
        height: 400,
        position: 'relative',
    },
    playerContainer: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    player1: {
        bottom: 0,
        width: '100%',
    },
    player2: {
        left: 0,
        height: '100%',
    },
    player3: {
        top: 0,
        width: '100%',
    },
    player4: {
        right: 0,
        height: '100%',
    }
})
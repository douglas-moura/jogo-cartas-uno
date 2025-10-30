import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, StyleSheet } from "react-native"
import { contexto } from "../../context/GameContext"
import Campo from "../../components/Campo"
import Carta from "../../components/Carta"

export default function HomeScreen() {
    const { nome, partida, baralho, turno } = contexto()

    if (!partida) {
        return (
            <SafeAreaView style={styles.paginaContainer} edges={['top', 'bottom']}>
                <View>
                    <Text>Nenhuma partida em andamento.</Text>
                </View>
            </SafeAreaView>
        )
    } else {
        if (baralho) {
            return (
                <SafeAreaView style={styles.paginaContainer} edges={['top', 'bottom']}>
                    <Text>Partida</Text>
                    <Text>Vez: {turno}</Text>
                    <Campo jogadores={partida.getJogadores()} />
                    {/* Baralho */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 100, gap: 8 }}>
                        {baralho.getCartas().map((carta, index) => (
                            <View key={index}>
                                <Carta cartaInfos={carta} />
                            </View>
                        ))}
                    </View>
                </SafeAreaView>
            )
        } else {
            return (
                <SafeAreaView style={styles.paginaContainer} edges={['top', 'bottom']}>
                    <View>
                        <Text>Baralho não encontrado.</Text>
                    </View>
                </SafeAreaView>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    paginaContainer: {
        flex: 1,
        padding: 16,
    },
})
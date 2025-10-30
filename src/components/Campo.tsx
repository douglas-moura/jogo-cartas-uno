import { View, StyleSheet } from "react-native"
import { Jogador as JogadorClass } from "../class/JogadorClass"
import { Carta as CartaClass } from "../class/CartaClass"
import { contexto } from "../context/GameContext"
import Jogador from "./Jogador"
import Carta from "./Carta"
import { useEffect, useState } from "react"
import { Baralho } from "../class/BaralhoClass"

export default function Campo({ jogadores }: { jogadores: JogadorClass[] }) {
    const { partida } = contexto()
    const [monteAtual, setMonteAtual] = useState<Baralho>(partida.getMonte())
    function receberId(id: number | null) {}

    useEffect(() => {

    }, [monteAtual])
    
    return (
        <View style={styles.campo}>
            {jogadores.map((jogador, index) => (
                <View key={index} style={[
                    styles.playerContainer,
                    styles[`player${index + 1}` as keyof typeof styles]
                ]}>
                    <Jogador jogadorClass={jogador} id={index} />
                </View>
            ))}
            <View style={styles.monte}>
                {partida?.getMonte()?.getCartas().map((carta, index) => (
                    <View style={{ transform: [{ rotate: `${Math.floor(Math.random() * 100) - 50}deg` }] }}>
                        <Carta cartaInfos={carta ?? new CartaClass(0, '#fff','')} cartaSelecionada={receberId} />
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    campo: {
        backgroundColor: '#0b6623',
        height: 400,
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    monte: {
        position: 'absolute',
        height: 80,
        width: 80,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#099c09ff',
        margin: 'auto',
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
        transform: [{ rotate: '90deg' }],
    },
    player3: {
        top: 0,
        width: '100%',
        transform: [{ rotate: '180deg' }],
    },
    player4: {
        right: 0,
        height: '100%',
        transform: [{ rotate: '270deg' }],
    }
})
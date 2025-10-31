import { View, Text, StyleSheet, Pressable } from "react-native"
import { Baralho } from "../class/BaralhoClass"
import { useEffect, useState } from "react"
import { contexto } from "../context/GameContext"
import Carta from "./Carta"

export default function Mao({ cartas, jogadorId }: { cartas: Baralho, jogadorId: number }) {
    const [selecionada, setSelecionada] = useState<number | null>(null)
    const [maoAtual, setMaoAtual] = useState<Baralho>(cartas)
    const { turno, partida, setTurno } = contexto()

    function receberId(id: number | null) {
        setSelecionada(id)
    }

    function baixarCarta(id: number, mao: Baralho) {
        partida!.AddCartaMonte(mao.getCartas()[id], mao)
        partida.getJogadores()[jogadorId].getMao().removerCarta(id)
        setTurno(turno + 1) 
    }

    useEffect(() => {}, [selecionada, maoAtual])

    return (
        <View style={styles.mao}>
            <View style={[styles.cartasContainerBox, { width: 30 + (maoAtual.getCartas().length - 1) * 20 }]}>
                {maoAtual.getCartas().map((carta, index) => (
                    <View style={[
                            styles.cartaContainer,
                            selecionada == index && jogadorId == turno ? styles.ativo : null,
                            { marginLeft: index * 20 }
                        ]} key={carta.getId()}>
                        { selecionada == carta.getId() && jogadorId == turno ? <Pressable onPress={() => baixarCarta(index, maoAtual)}><Text>Baixar</Text></Pressable> : null }
                        <Carta cartaInfos={carta} cartaSelecionada={receberId} />
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mao: {
        flexDirection: "row",
        justifyContent: "center",
        height: 80,
        width: 80,
    },
    cartasContainerBox: {
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cartaContainer: {
        position: 'absolute',
    },
    ativo: {
        top: -10
    }
})
import { View, Text, StyleSheet, Pressable } from "react-native"
import { Carta as CardClass } from "../class/CartaClass"
import { useEffect, useState } from "react"
import { contexto } from "../context/GameContext"
import Carta from "./Carta"
import { Baralho } from "../class/BaralhoClass"

export default function Mao({ cartas, jogadorId }: { cartas: CardClass[], jogadorId: number }) {
    const [selecionada, setSelecionada] = useState<number | null>(null)
    const { turno, partida } = contexto()

    function receberId(id: number | null) {
        setSelecionada(id)
    }

    function baixarCarta(id: number, mao: CardClass[], monte: Baralho | null) {
        console.log('MONTE ANTIGO: ', partida?.getMonte())
        partida!.AddCartaMonte(mao[id])
        console.log('MONTE ATUALIZADO: ', partida?.getMonte())
    }

    useEffect(() => {

    }, [selecionada])

    return (
        <View style={styles.mao}>
            <View style={[styles.cartasContainerBox, { width: 30 + (cartas.length - 1) * 20 }]}>
                {cartas.map((carta, index) => (
                    <View style={[styles.cartaContainer, selecionada == index && jogadorId == turno ? styles.ativo : null , { marginLeft: index * 20 }]} key={index}>
                        { selecionada == index && jogadorId == turno ? <Pressable onPress={() => baixarCarta(index, cartas, partida!.getMonte())}><Text>Baixar</Text></Pressable> : null }
                        <Carta idCarta={index} cartaInfos={carta} cartaSelecionada={receberId} />
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
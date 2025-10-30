import { View, Text, StyleSheet } from "react-native"
import { Carta as CardClass } from "../class/CartaClass"
import { useEffect, useState } from "react"
import { contexto } from "../context/GameContext"
import Carta from "./Carta"

export default function Mao({ cartas, jogadorId }: { cartas: CardClass[], jogadorId: number }) {
    const [selecionada, setSelecionada] = useState<number | null>(null)
    const { turno } = contexto()

    function receberId(id: number | null) {
        setSelecionada(id)
        console.log(id);   
    }

    useEffect(() => {

    }, [selecionada])

    return (
        <View style={styles.mao}>
            <View style={[styles.cartasContainerBox, { width: 30 + (cartas.length - 1) * 20 }]}>
                {cartas.map((carta, index) => (
                    <View style={[styles.cartaContainer, selecionada == index && jogadorId == turno ? styles.ativo : null , { marginLeft: index * 20 }]} key={index}>
                        { selecionada == index && jogadorId == turno ? <Text>Baixar</Text> : null }
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
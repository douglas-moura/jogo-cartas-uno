import { View, Text, StyleSheet, Pressable } from "react-native"
import { Jogador as JogadorClass } from "../class/JogadorClass"
import { contexto } from "../context/GameContext"
import { useState } from "react"
import Mao from "./Mao"

export default function Jogador({ jogadorClass, id }: { jogadorClass: JogadorClass, id: number }) {
    const { baralho, turno, setTurno } = contexto()
    const [mao, setMao] = useState(jogadorClass.getMao())

    function comprarCarta() {
        jogadorClass.comprarCarta(baralho)
        setMao([...jogadorClass.getMao()]) // força re-render
    }
    
    return (
        <View style={styles.jogadorContainerBox}>
            {turno != id && <View style={{ zIndex: 100, opacity: .3, position: 'absolute', width: 150, height: '100%', backgroundColor: 'red' }} />}
            <Text>{ jogadorClass.getNome() }</Text>
            <Mao cartas={mao} />
            <Pressable onPress={() => comprarCarta()} >
                <Text>Comprar Carta</Text>
            </Pressable>
            <Pressable onPress={() => setTurno(turno + 1)} >
                <Text>Passar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    jogadorContainerBox: {
        alignItems: "center",
    }
})
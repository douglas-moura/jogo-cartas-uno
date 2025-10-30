import { View, Text, StyleSheet, Pressable } from "react-native"
import { Carta } from "../class/CartaClass"
import { useState } from "react"

export default function JogadorMao({ idCarta, cartaInfos, cartaSelecionada }: { idCarta?: number, cartaInfos: Carta, cartaSelecionada: (id: number | null) => void }) {
    return (
        <Pressable style={[styles.cartaContainer, { backgroundColor: cartaInfos.getCor() ?? '#fff' }]} onPress={() => cartaSelecionada(idCarta ?? 99)}>
            <Text>{ cartaInfos.getValor() ?? '?' }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cartaContainer: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        width: 30,
        height: 50,
        justifyContent: "center",
    },
    ativo: {
        top: -10,
    }
})
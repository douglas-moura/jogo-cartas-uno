import { View, Text, StyleSheet } from "react-native"
import { Carta } from "../class/CartaClass"

export default function JogadorMao({ cartaInfos }: { cartaInfos: Carta }) {
    return (
        <View style={[styles.cartaContainer, { backgroundColor: cartaInfos.getCor() ?? '#fff' }]}>
            <Text>{ cartaInfos.getValor() ?? 'XX' }</Text>
        </View>
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
    }
})
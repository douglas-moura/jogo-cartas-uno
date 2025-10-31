import { Text, StyleSheet, Pressable } from "react-native"
import { Carta as CartaClass } from "../class/CartaClass"

export default function Carta({ cartaInfos, cartaSelecionada }: { cartaInfos: CartaClass, cartaSelecionada: (id: number | null) => void }) {
    return (
        <Pressable style={[styles.cartaContainer, { backgroundColor: cartaInfos.getCor() ?? '#fff' }]} onPress={() => cartaSelecionada(cartaInfos.getId() ?? 99)}>
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
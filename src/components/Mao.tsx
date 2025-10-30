import { View, StyleSheet } from "react-native"
import { Carta as CardClass } from "../class/CartaClass"
import Carta from "./Carta"

export default function Mao({ cartas }: { cartas: CardClass[] }) {
    return (
        <View style={styles.mao}>
            <View style={[styles.cartasContainerBox, { width: 30 + (cartas.length - 1) * 20 }]}>
                {cartas.map((carta, index) => (
                    <View style={[styles.cartaContainer, { marginLeft: index * 20 }]} key={index}>
                        <Carta cartaInfos={carta} />
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
    }
})
import { View, Text, StyleSheet } from "react-native"

export default function JogadorContainer({ nome }: { nome: string | null }) {
    return (
        <View style={styles.jogadorContainerBox}>
            <Text>{ nome }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    jogadorContainerBox: {
        
    }
})
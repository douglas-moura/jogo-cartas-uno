import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"
import { contexto } from "../../context/GameContext"
import { useState } from "react"

export default function FormNomeJogador({ navigation }: any) {
    const { nome, setNome, setPartida } = contexto()
    
    const iniciarPartida = () => {
        setPartida(true)
        navigation.navigate('Partida')
    }

    return (
        <View style={styles.popupContainer}>
            <View style={styles.menuPopup}>
                <Text>Digite seu nome</Text>
                <TextInput
                    onChangeText={setNome}
                    value={nome ?? ''}
                    placeholder="Jogador A"
                />
                <Pressable onPress={() => iniciarPartida()} >
                    <Text>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    popupContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#252525',
    },
    menuPopup: {
        zIndex: 30,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
})
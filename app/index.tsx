import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { GameProvider } from '../src/context/GameContext'
import Navegacao from '../src/navigation/Navegacao'

export default function App() {
    return (
        <GameProvider>
            <NavigationContainer>
                <StatusBar />
                <Navegacao />
            </NavigationContainer>
        </GameProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
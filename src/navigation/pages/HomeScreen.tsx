import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, Pressable } from "react-native"

export default function HomeScreen({ navigation }: any) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>Home Screen</Text>
                <Pressable onPress={() => navigation.navigate('NomeJogador')}>
                    <Text>Jogar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
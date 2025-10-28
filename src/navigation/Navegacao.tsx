import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./pages/HomeScreen"
import PartidaScreen from "./pages/PartidaScreen"
import FormNomeJogador from "./pages/IniciarPartidaScreen"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

// --- Tabs ---
function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: '#aaa',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default function Navegacao() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Partida" component={PartidaScreen} />
            <Stack.Screen name="NomeJogador" component={FormNomeJogador} />
        </Stack.Navigator>
    )
}
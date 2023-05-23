import { SafeAreaView, StyleSheet } from 'react-native'
import Register from './src/page/Register'
import Login from './src/page/Login'
import HomeScreen from './src/page/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabsContainer from './src/page/TabsContainer'
const Stack = createNativeStackNavigator()
import { SafeAreaProvider } from 'react-native-safe-area-context'
export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='HomeScreen'
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name='HomeScreen' component={HomeScreen} />
                    <Stack.Screen name='Register' component={Register} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='TabsContainer' component={TabsContainer} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 24,
        color: '#212529',
        marginTop: 16,
    },
    titleDesc: {
        color: '#CD2027',
        marginTop: 12,
        fontWeight: 600,
        fontSize: 20,
        lineHeight: 28,
        textAlign: 'center',
    },
})

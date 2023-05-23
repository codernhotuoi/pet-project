import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from '../components/Tabs'
const BookList = () => {
    return (
        <SafeAreaProvider style={{ flex: 1, position: 'relative' }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#EBF0FF' }}>
                <View style={styles.container}>
                    <ScrollView>
                        <View>
                            <View style={{ marginLeft: 17, alignItems: 'flex-start', flex: 1 }}>
                                <Text style={{ color: '#2E3192', fontWeight: 700, fontSize: 24, lineHeight: 40 }}>
                                    Chào Linh,
                                </Text>
                                <Text style={{ fontSize: 16, fontWeight: 600, lineHeight: 24, color: '#2E3192' }}>
                                    Nothing is more important than practice!
                                </Text>
                            </View>
                            <View style={{ marginTop: 15, alignItems: 'center' }}>
                                <View>
                                    <Image source={require('../../assets/img/CompleteEnglish.png')}></Image>
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Image source={require('../../assets/img/CompleteGrammar2.png')}></Image>
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Image source={require('../../assets/img/CompleteGrammar1.png')}></Image>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'relative',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})
export default BookList

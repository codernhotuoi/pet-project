import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from '../components/Tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getFont, getLineHeight, HEIGHT, MS, WIDTH } from '../components/scaleUtils'

const BookList = () => {
    const insets = useSafeAreaInsets()
    return (
        <View
            style={{ flex: 1, backgroundColor: '#EBF0FF', position: 'relative', paddingTop: Math.max(insets.top, 16) }}>
            <ScrollView>
                <View>
                    <View style={{ marginLeft: WIDTH(17), alignItems: 'flex-start', flex: 1 }}>
                        <Text
                            style={{
                                color: '#2E3192',
                                fontWeight: 700,
                                fontSize: getFont(24),
                                lineHeight: getLineHeight(40),
                            }}>
                            {'Chào Linh,'}
                        </Text>
                        <Text
                            style={{
                                fontSize: getFont(16),
                                fontWeight: 600,
                                lineHeight: getLineHeight(24),
                                color: '#2E3192',
                            }}>
                            {'Nothing is more important than practice!'}
                        </Text>
                    </View>
                    <View style={{ marginTop: MS(15), alignItems: 'center' }}>
                        <View>
                            <Image
                                source={require('../../assets/img/CompleteEnglish.png')}
                                style={{ width: MS(343), height: MS(170) }}></Image>
                        </View>
                        <View style={{ marginTop: MS(15) }}>
                            <Image
                                source={require('../../assets/img/CompleteGrammar2.png')}
                                style={{ width: MS(343), height: MS(170) }}></Image>
                        </View>
                        <View style={{ marginTop: MS(15) }}>
                            <Image
                                source={require('../../assets/img/CompleteGrammar1.png')}
                                style={{ width: MS(343), height: MS(170) }}></Image>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})
export default BookList

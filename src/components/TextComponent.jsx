import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const TextComponent = ({ title, fontFamily = 'Inter', fontSize, fontW, color, lineH, styles = {} }) => {
    const [loaded] = useFonts({
        Inter: require('../../assets/font/Inter-Regular.ttf'),
    })
    if (!loaded) {
        return null
    }
    return (
        <Text
            style={{
                fontFamily: fontFamily,
                fontSize: fontSize,
                fontWeight: fontW,
                color: color,
                lineHeight: lineH,
                textAlign: 'center',
                styles,
            }}>
            {title}
        </Text>
    )
}

export default TextComponent

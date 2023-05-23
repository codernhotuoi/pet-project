import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function HomeScreen({ navigation }) {
    const insets = useSafeAreaInsets()
    const [loaded] = useFonts({
        Inter: require('../../assets/font/Inter-Regular.ttf'),
    })
    if (!loaded) {
        return null
    }
    return (
        <View
            style={{
                backgroundColor: '#EBF0FF',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: Math.max(insets.top, 16),
            }}>
            <View>
                <Image source={require('../../assets/img/logo.png')}></Image>
            </View>
            <View>
                <Text style={styles.title}>Phát triển Tiếng Anh Toàn Diện 4 kỹ năng</Text>
                <Text style={styles.titleDesc}>NGHE - NÓI - ĐỌC - VIẾT</Text>
            </View>
            <View style={{ marginTop: 40, alignItems: 'center', position: 'relative' }}>
                <View style={{ flexDirection: 'row', marginTop: 0, gap: 56 }}>
                    <Image source={require('../../assets/img/speakicon.png')} style={{ width: 60 }}></Image>
                    <Image source={require('../../assets/img/readicon.png')} style={{ width: 60 }}></Image>
                </View>
                <View style={{ flexDirection: 'row', gap: 202, position: 'absolute', marginTop: 78 }}>
                    <Image source={require('../../assets/img/listenicon.png')} style={{ width: 60 }}></Image>
                    <Image source={require('../../assets/img/writeicon.png')} style={{ width: 60 }}></Image>
                </View>
                <View style={{ marginTop: 4, width: 296, height: 296 }}>
                    <Image source={require('../../assets/img/Image.png')}></Image>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    style={{
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        backgroundColor: '#CD2027',
                        width: 343,
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 17,
                            lineHeight: 24,
                            fontWeight: 600,
                            color: '#fff',
                            fontFamily: 'Inter',
                        }}>
                        Hãy bắt đầu
                    </Text>
                </TouchableOpacity>
                <View style={{ marginTop: 24, flexDirection: 'row', gap: 2 }}>
                    <Text style={{ fontWeight: 400, fontSize: 15, lineHeight: 24, fontFamily: 'Inter' }}>
                        Đã là người dùng Jaxtina rồi?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text
                            style={{
                                color: '#2E3192',
                                fontWeight: 600,
                                fontSize: 16,
                                lineHeight: 24,
                                fontFamily: 'Inter',
                            }}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    title: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 24,
        color: '#212529',
        marginTop: 16,
        fontFamily: 'Inter',
    },
    titleDesc: {
        color: '#CD2027',
        marginTop: 12,
        fontWeight: 600,
        fontSize: 20,
        lineHeight: 28,
        textAlign: 'center',
        fontFamily: 'Inter',
    },
})

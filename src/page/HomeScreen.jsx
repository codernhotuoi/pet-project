import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native'
import { useFonts } from 'expo-font'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TextComponent from '../components/TextComponent'
import { getFont, getLineHeight, HEIGHT, MS, WIDTH } from '../components/scaleUtils'

export default function HomeScreen({ navigation }) {
    useWindowDimensions()
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
                <Image
                    source={require('../../assets/img/logo.png')}
                    style={{ width: HEIGHT(95), height: HEIGHT(64) }}></Image>
            </View>
            <View>
                <Text
                    style={{
                        fontWeight: 500,
                        fontSize: getFont(16),
                        lineHeight: getLineHeight(24),
                        color: '#212529',
                        marginTop: MS(16),
                        fontFamily: 'Inter',
                        textAlign: 'center',
                    }}>
                    Phát triển Tiếng Anh Toàn Diện 4 kỹ năng
                </Text>
                <Text
                    style={{
                        color: '#CD2027',
                        marginTop: MS(12),
                        fontWeight: 600,
                        fontSize: getFont(20),
                        lineHeight: getLineHeight(28),
                        textAlign: 'center',
                        fontFamily: 'Inter',
                    }}>
                    NGHE - NÓI - ĐỌC - VIẾT
                </Text>
            </View>
            <View style={{ marginTop: MS(40), alignItems: 'center', position: 'relative' }}>
                <View style={{ flexDirection: 'row', gap: MS(56) }}>
                    <Image
                        source={require('../../assets/img/speakicon.png')}
                        style={{ width: WIDTH(60), height: WIDTH(60) }}></Image>
                    <Image
                        source={require('../../assets/img/readicon.png')}
                        style={{ width: WIDTH(60), height: WIDTH(60), height: WIDTH(60) }}></Image>
                </View>
                <View style={{ flexDirection: 'row', gap: MS(202), position: 'absolute', marginTop: MS(78) }}>
                    <Image
                        source={require('../../assets/img/listenicon.png')}
                        style={{ width: WIDTH(60), height: WIDTH(60), height: WIDTH(60) }}></Image>
                    <Image
                        source={require('../../assets/img/writeicon.png')}
                        style={{ width: WIDTH(60), height: WIDTH(60), height: WIDTH(60) }}></Image>
                </View>
                <View style={{ marginTop: MS(4) }}>
                    <Image
                        source={require('../../assets/img/Image.png')}
                        style={{ width: HEIGHT(296), height: MS(296) }}></Image>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    style={{
                        paddingHorizontal: WIDTH(16),
                        paddingVertical: MS(12),
                        backgroundColor: '#CD2027',
                        width: WIDTH(343),
                        borderRadius: MS(12),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: getFont(17),
                            lineHeight: getLineHeight(24),
                            fontWeight: 600,
                            color: '#fff',
                            fontFamily: 'Inter',
                        }}>
                        {'Hãy bắt đầu'}
                    </Text>
                </TouchableOpacity>
                <View style={{ marginTop: WIDTH(24), flexDirection: 'row', gap: WIDTH(2) }}>
                    <Text
                        style={{
                            fontWeight: 400,
                            fontSize: getFont(15),
                            lineHeight: getLineHeight(24),
                            fontFamily: 'Inter',
                        }}>
                        {'Đã là người dùng Jaxtina rồi?'}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text
                            style={{
                                color: '#2E3192',
                                fontWeight: 600,
                                fontSize: getFont(16),
                                lineHeight: getLineHeight(24),
                                fontFamily: 'Inter',
                            }}>
                            {'Đăng nhập'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

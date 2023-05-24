import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    SafeAreaView,
    TextInput,
    ScrollView,
    useWindowDimensions,
} from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { registerSchema, schema } from '../../rules/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getFont, getLineHeight, MS, WIDTH } from '../components/scaleUtils'

const Register = ({ navigation }) => {
    useWindowDimensions()
    const insets = useSafeAreaInsets()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    })
    const onSubmit = (data) => console.log('123', data)
    console.log(errors)
    return (
        <View
            style={{ flex: 1, alignItems: 'center', backgroundColor: '#F8F9FA', paddingTop: Math.max(insets.top, 16) }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    position: 'relative',
                }}>
                <TouchableOpacity
                    style={{
                        paddingVertical: MS(9),
                        paddingHorizontal: MS(13),
                        borderRadius: MS(100),
                        backgroundColor: '#fff',
                        position: 'absolute',
                        left: WIDTH(16),
                    }}>
                    <Image
                        source={require('../../assets/img/Icon.png')}
                        style={{ width: MS(9), height: MS(18) }}></Image>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text
                        style={{
                            fontWeight: 600,
                            fontSize: getFont(16),
                            lineHeight: getLineHeight(24),
                            fontFamily: 'Inter',
                        }}>
                        {'Tạo tài khoản'}
                    </Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ marginTop: MS(16), alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/img/logo.png')}
                        style={{ width: MS(96), height: MS(64) }}></Image>
                </View>
                <View
                    style={{
                        marginTop: MS(16),
                        marginHorizontal: MS(16),
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: getFont(15),
                            lineHeight: getLineHeight(24),
                            fontWeight: 400,
                            fontFamily: 'Inter',
                        }}>
                        {'Sắp xong rồi. Bạn hãy tạo tài khoản để được hỗ trợ trong suốt quá trình nhé!'}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: MS(16),
                        borderRadius: MS(12),
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#fff',
                        marginTop: MS(24),
                        width: WIDTH(343),
                    }}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    marginLeft: MS(52),
                                    height: MS(48),
                                    flex: 1,
                                    paddingVertical: MS(12),
                                    fontFamily: 'Inter',
                                }}
                                placeholder='Họ và Tên'></TextInput>
                        )}
                        name='fullname'
                    />
                    {errors.fullname && (
                        <Text
                            style={{
                                position: 'absolute',
                                top: '50%',
                                transform: [{ translateY: MS(-10) }],
                                right: MS(10),
                                color: 'red',
                                fontFamily: 'Inter',
                            }}>
                            {errors.fullname.message}
                        </Text>
                    )}
                    <Image
                        source={require('../../assets/img/Profile.png')}
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                            top: MS(14),
                            left: MS(20),
                            width: MS(16),
                            height: MS(20),
                        }}></Image>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: MS(16),
                        borderRadius: MS(12),
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#fff',
                        marginTop: MS(24),
                        width: WIDTH(343),
                    }}>
                    <Image
                        source={require('../../assets/img/Arrow-Down3.png')}
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                            top: MS(14),
                            left: MS(20),
                            width: MS(16),
                            height: MS(20),
                        }}></Image>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    marginLeft: MS(52),
                                    height: MS(48),
                                    flex: 1,
                                    paddingVertical: MS(12),
                                    fontFamily: 'Inter',
                                }}
                                placeholder='Email'></TextInput>
                        )}
                        name='email'
                    />
                    {errors.email && (
                        <Text
                            style={{
                                position: 'absolute',
                                top: '50%',
                                transform: [{ translateY: -10 }],
                                right: 10,
                                color: 'red',
                                fontFamily: 'Inter',
                            }}>
                            {errors.email.message}
                        </Text>
                    )}
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: MS(16),
                        borderRadius: MS(12),
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#fff',
                        marginTop: MS(24),
                        width: WIDTH(343),
                    }}>
                    <Image
                        source={require('../../assets/img/Stroke1.png')}
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                            top: MS(14),
                            left: MS(20),
                            width: MS(16),
                            height: MS(20),
                        }}></Image>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    fontFamily: 'Inter',
                                    marginLeft: MS(52),
                                    height: MS(48),
                                    flex: 1,
                                    paddingVertical: MS(12),
                                }}
                                placeholder='Số điện thoại'></TextInput>
                        )}
                        name='phonenumber'
                    />
                    {errors.phonenumber && (
                        <Text
                            style={{
                                fontFamily: 'Inter',
                                position: 'absolute',
                                top: '50%',
                                transform: [{ translateY: MS(-10) }],
                                right: MS(10),
                                color: 'red',
                            }}>
                            {errors.phonenumber.message}
                        </Text>
                    )}
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: MS(16),
                        borderRadius: MS(12),
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#fff',
                        marginTop: MS(24),
                        width: WIDTH(343),
                    }}>
                    <Image
                        source={require('../../assets/img/Lock.png')}
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                            top: MS(14),
                            left: MS(20),
                            width: MS(16),
                            height: MS(20),
                        }}></Image>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    fontFamily: 'Inter',
                                    marginLeft: MS(52),
                                    height: MS(48),
                                    flex: 1,
                                    paddingVertical: MS(12),
                                }}
                                placeholder='Mật khẩu'></TextInput>
                        )}
                        name='password'
                    />
                    {errors.password && (
                        <Text
                            style={{
                                position: 'absolute',
                                top: '50%',
                                transform: [{ translateY: -10 }],
                                right: 10,
                                color: 'red',
                                fontFamily: 'Inter',
                            }}>
                            {errors.password.message}
                        </Text>
                    )}
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: MS(16),
                        borderRadius: MS(12),
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#fff',
                        marginTop: MS(24),
                        width: WIDTH(343),
                    }}>
                    <Image
                        source={require('../../assets/img/Calendar.png')}
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                            top: MS(14),
                            left: MS(20),
                            width: MS(16),
                            height: MS(20),
                        }}></Image>
                    <TextInput
                        style={{
                            marginLeft: MS(52),
                            height: MS(48),
                            flex: 1,
                            paddingVertical: MS(12),
                            fontFamily: 'Inter',
                        }}
                        placeholder='Ngày, tháng, năm sinh'></TextInput>
                </View>
                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    style={{
                        paddingHorizontal: MS(16),
                        paddingVertical: MS(12),
                        backgroundColor: '#CD2027',
                        borderRadius: MS(12),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: MS(32),
                        marginHorizontal: MS(16),
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
                <View
                    style={{
                        height: MS(1),
                        borderWidth: MS(1),
                        borderColor: '#c5cee0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: MS(28),
                        marginHorizontal: MS(40),
                        position: 'relative',
                    }}>
                    <View
                        style={{
                            backgroundColor: '#F8F9FA',
                            paddingHorizontal: MS(8),
                            position: 'absolute',
                            zIndex: 100,
                            top: MS(-12),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={[
                                {
                                    fontSize: getFont(15),
                                    lineHeight: getLineHeight(24),
                                    color: '#495057',
                                    fontFamily: 'Inter',
                                },
                            ]}>
                            {'Hoặc'}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        paddingHorizontal: MS(16),
                        paddingVertical: MS(12),
                        backgroundColor: '#1877F2',
                        borderRadius: MS(12),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: MS(32),
                        flexDirection: 'row',
                        gap: MS(12),
                        marginHorizontal: MS(16),
                    }}>
                    <Image source={require('../../assets/img/Vector.png')}></Image>
                    <Text
                        style={{
                            fontSize: getFont(17),
                            lineHeight: getLineHeight(24),
                            fontWeight: 600,
                            color: '#fff',
                            fontFamily: 'Inter',
                        }}>
                        {'Đăng nhập bằng facebook'}
                    </Text>
                </TouchableOpacity>
                <View style={{ marginTop: MS(24), flexDirection: 'row', gap: MS(2), justifyContent: 'center' }}>
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
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {},
})
export default Register

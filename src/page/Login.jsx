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
import { useForm, Controller } from 'react-hook-form'
import { Button } from 'react-native'
import { loginSchema, schema } from '../../rules/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getFont, getLineHeight, globalDimension, HEIGHT, MS, WIDTH } from '../components/scaleUtils'

const Login = ({ navigation }) => {
    useWindowDimensions()
    console.log('globalDimension', globalDimension)
    const insets = useSafeAreaInsets()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    })
    const onSubmit = (data) => navigation.navigate('TabsContainer')
    console.log(errors)
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F8F9FA',
                paddingTop: Math.max(insets.top, 16),
            }}>
            <ScrollView>
                <View style={{ alignItems: 'flex-start' }}>
                    <TouchableOpacity
                        style={{
                            paddingVertical: MS(9),
                            paddingHorizontal: MS(13),
                            borderRadius: 100,
                            backgroundColor: '#fff',
                            marginLeft: MS(16),
                        }}>
                        <Image
                            source={require('../../assets/img/Icon.png')}
                            style={{ width: MS(9), height: MS(18) }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: WIDTH(20), alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/img/LogoLogin.png')}
                        style={{ width: MS(143), height: MS(96) }}></Image>
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
                            fontWeight: 500,
                            color: '#2E3192',
                        }}>
                        {'The Pioneer in Coaching 4 English Skills'}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: MS(16),
                        borderRadius: MS(12),
                        position: 'relative',
                        backgroundColor: '#fff',
                        marginTop: MS(24),
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
                                transform: [{ translateY: MS(-10) }],
                                right: MS(10),
                                color: 'red',
                            }}>
                            {errors.email.message}
                        </Text>
                    )}
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
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: MS(16),
                        borderRadius: MS(12),
                        position: 'relative',
                        backgroundColor: '#fff',
                        marginTop: MS(24),
                    }}>
                    {errors.password && (
                        <Text
                            style={{
                                position: 'absolute',
                                top: '50%',
                                transform: [{ translateY: MS(-10) }],
                                right: MS(10),
                                color: 'red',
                            }}>
                            {errors.password.message}
                        </Text>
                    )}
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
                            maxLength: 3,
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
                                }}
                                placeholder='Mật khẩu'></TextInput>
                        )}
                        name='password'
                    />
                </View>
                <View>
                    <Text
                        style={{
                            marginTop: MS(12),
                            textAlign: 'right',
                            marginRight: MS(16),
                            fontWeight: 400,
                            fontSize: getFont(15),
                            lineHeight: getLineHeight(24),
                            color: '#2E3192',
                            position: 'relative',
                        }}>
                        {'Quên mật khẩu'}
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        style={{
                            paddingVertical: MS(12),
                            backgroundColor: '#CD2027',
                            width: WIDTH(343),
                            marginHorizontal: MS(12),
                            borderRadius: MS(12),
                            alignItems: 'center',
                            marginTop: MS(24),
                        }}>
                        <Text
                            style={{
                                fontSize: getFont(17),
                                lineHeight: getLineHeight(24),
                                fontWeight: 600,
                                color: '#fff',
                            }}>
                            {'Đăng nhập'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: MS(1),
                        borderWidth: MS(1),
                        borderColor: '#c5cee0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: MS(105),
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
                                },
                            ]}>
                            {'Hoặc'}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        paddingVertical: MS(12),
                        backgroundColor: '#1877F2',
                        width: WIDTH(343),
                        borderRadius: MS(12),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: MS(32),
                        flexDirection: 'row',
                        gap: MS(12),
                        marginHorizontal: MS(12),
                    }}>
                    <Image source={require('../../assets/img/Vector.png')}></Image>
                    <Text
                        style={{
                            fontSize: getFont(17),
                            lineHeight: getLineHeight(24),
                            fontWeight: 600,
                            color: '#fff',
                        }}>
                        {'Đăng nhập bằng facebook'}
                    </Text>
                </TouchableOpacity>
                <View style={{ marginTop: MS(24), flexDirection: 'row', gap: MS(2), justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 400, fontSize: getFont(15), lineHeight: getLineHeight(24) }}>
                        {'Chưa có tài khoản Jaxtina ?'}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text
                            style={{
                                color: '#2E3192',
                                fontWeight: 600,
                                fontSize: getFont(16),
                                lineHeight: getLineHeight(24),
                            }}>
                            {'Đăng ký ngay'}
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
export default Login

import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useForm, Controller } from 'react-hook-form'
import { Button } from 'react-native'
import { loginSchema, schema } from '../../rules/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Login = ({ navigation }) => {
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
                            paddingVertical: 9,
                            paddingHorizontal: 13,
                            borderRadius: 100,
                            backgroundColor: '#fff',
                            marginLeft: 16,
                        }}>
                        <Image source={require('../../assets/img/Icon.png')} style={{ width: 9, height: 18 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Image source={require('../../assets/img/logo.png')}></Image>
                </View>
                <View
                    style={{
                        marginTop: 16,
                        marginHorizontal: 16,
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 15,
                            lineHeight: 24,
                            fontWeight: 500,
                            color: '#2E3192',
                        }}>
                        The Pioneer in Coaching 4 English Skills
                    </Text>
                </View>

                <SafeAreaView
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 16,
                        borderRadius: 12,
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#fff',
                        marginTop: 24,
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
                                    marginLeft: 52,
                                    height: 48,
                                    flex: 1,
                                    paddingVertical: 12,
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
                            }}>
                            {errors.email.message}
                        </Text>
                    )}
                    <Image
                        source={require('../../assets/img/Arrow-Down3.png')}
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                            top: 14,
                            left: 20,
                            width: 16,
                            height: 20,
                        }}></Image>
                </SafeAreaView>
                <SafeAreaView
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 16,
                        borderRadius: 12,
                        // overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#fff',
                        marginTop: 24,
                    }}>
                    {errors.password && (
                        <Text
                            style={{
                                position: 'absolute',
                                top: '50%',
                                transform: [{ translateY: -10 }],
                                right: 10,
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
                            top: 14,
                            left: 20,
                            width: 16,
                            height: 20,
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
                                    marginLeft: 52,
                                    height: 48,
                                    flex: 1,
                                    paddingVertical: 12,
                                }}
                                placeholder='Mật khẩu'></TextInput>
                        )}
                        name='password'
                    />
                </SafeAreaView>
                <View>
                    <Text
                        style={{
                            marginTop: 12,
                            textAlign: 'right',
                            marginRight: 16,
                            fontWeight: 400,
                            fontSize: 15,
                            lineHeight: 24,
                            color: '#2E3192',
                            position: 'relative',
                        }}>
                        Quên mật khẩu
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        style={{
                            paddingVertical: 12,
                            backgroundColor: '#CD2027',
                            width: 343,
                            marginHorizontal: 12,
                            borderRadius: 12,
                            alignItems: 'center',
                            marginTop: 24,
                        }}>
                        <Text
                            style={{
                                fontSize: 17,
                                lineHeight: 24,
                                fontWeight: 600,
                                color: '#fff',
                            }}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 1,
                        borderWidth: 1,
                        borderColor: '#c5cee0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 105,
                        marginHorizontal: 40,
                        position: 'relative',
                    }}>
                    <View
                        style={{
                            backgroundColor: '#F8F9FA',
                            paddingHorizontal: 8,
                            position: 'absolute',
                            zIndex: 100,
                            top: -12,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={[
                                {
                                    fontSize: 15,
                                    lineHeight: 24,
                                    color: '#495057',
                                },
                            ]}>
                            Hoặc
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        backgroundColor: '#1877F2',
                        width: 343,
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 32,
                        flexDirection: 'row',
                        gap: 12,
                        marginHorizontal: 12,
                    }}>
                    <Image source={require('../../assets/img/Vector.png')}></Image>
                    <Text
                        style={{
                            fontSize: 17,
                            lineHeight: 24,
                            fontWeight: 600,
                            color: '#fff',
                        }}>
                        Đăng nhập bằng facebook
                    </Text>
                </TouchableOpacity>
                <View style={{ marginTop: 24, flexDirection: 'row', gap: 2, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 400, fontSize: 15, lineHeight: 24 }}>Chưa có tài khoản Jaxtina ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: '#2E3192', fontWeight: 600, fontSize: 16, lineHeight: 24 }}>
                            Đăng ký ngay
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

import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { registerSchema, schema } from '../../rules/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

const Register = () => {
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
        <SafeAreaProvider style={{ flex: 1 }}>
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            position: 'relative',
                        }}>
                        <TouchableOpacity
                            style={{
                                paddingVertical: 9,
                                paddingHorizontal: 13,
                                borderRadius: 100,
                                backgroundColor: '#fff',
                                position: 'absolute',
                                left: 16,
                            }}>
                            <Image
                                source={require('../../assets/img/Icon.png')}
                                style={{ width: 9, height: 18 }}></Image>
                        </TouchableOpacity>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 600, fontSize: 16, lineHeight: 24, fontFamily: 'Inter' }}>
                                Tạo tài khoản
                            </Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{ marginTop: 16, alignItems: 'center' }}>
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
                                    fontWeight: 400,
                                    fontFamily: 'Inter',
                                }}>
                                Sắp xong rồi. Bạn hãy tạo tài khoản để được hỗ trợ trong suốt quá trình nhé!
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
                                        transform: [{ translateY: -10 }],
                                        right: 10,
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
                                overflow: 'hidden',
                                position: 'relative',
                                backgroundColor: '#fff',
                                marginTop: 24,
                            }}>
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
                        </SafeAreaView>
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
                            <Image
                                source={require('../../assets/img/Stroke1.png')}
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
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            fontFamily: 'Inter',
                                            marginLeft: 52,
                                            height: 48,
                                            flex: 1,
                                            paddingVertical: 12,
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
                                        transform: [{ translateY: -10 }],
                                        right: 10,
                                        color: 'red',
                                    }}>
                                    {errors.phonenumber.message}
                                </Text>
                            )}
                        </SafeAreaView>
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
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            fontFamily: 'Inter',
                                            marginLeft: 52,
                                            height: 48,
                                            flex: 1,
                                            paddingVertical: 12,
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
                        </SafeAreaView>
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
                            <Image
                                source={require('../../assets/img/Calendar.png')}
                                style={{
                                    position: 'absolute',
                                    zIndex: 100,
                                    top: 14,
                                    left: 20,
                                    width: 16,
                                    height: 20,
                                }}></Image>
                            <TextInput
                                style={{
                                    marginLeft: 52,
                                    height: 48,
                                    flex: 1,
                                    paddingVertical: 12,
                                    fontFamily: 'Inter',
                                }}
                                placeholder='Ngày, tháng, năm sinh'></TextInput>
                        </SafeAreaView>
                        <TouchableOpacity
                            onPress={handleSubmit(onSubmit)}
                            style={{
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                backgroundColor: '#CD2027',
                                borderRadius: 12,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 32,
                                marginHorizontal: 16,
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
                        <View
                            style={{
                                height: 1,
                                borderWidth: 1,
                                borderColor: '#c5cee0',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 28,
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
                                            fontFamily: 'Inter',
                                        },
                                    ]}>
                                    Hoặc
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                backgroundColor: '#1877F2',
                                borderRadius: 12,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 32,
                                flexDirection: 'row',
                                gap: 12,
                                marginHorizontal: 16,
                            }}>
                            <Image source={require('../../assets/img/Vector.png')}></Image>
                            <Text
                                style={{
                                    fontSize: 17,
                                    lineHeight: 24,
                                    fontWeight: 600,
                                    color: '#fff',
                                    fontFamily: 'Inter',
                                }}>
                                Đăng nhập bằng facebook
                            </Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 24, flexDirection: 'row', gap: 2, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 400, fontSize: 15, lineHeight: 24, fontFamily: 'Inter' }}>
                                Đã là người dùng Jaxtina rồi?
                            </Text>
                            <TouchableOpacity>
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
                    </ScrollView>
                </SafeAreaView>
            </View>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        // fontFamily: 'Inter-Regular',
        backgroundColor: '#F8F9FA',
    },
})
export default Register

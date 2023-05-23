import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BookList from './BookList'
import Course from '../components/Course'
import Main from '../components/Main'
import Speak from '../components/Speak'
import Tools from '../components/Tools'
const Tab = createBottomTabNavigator()
function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: [
                    {
                        display: 'flex',
                        paddingTop: 10,
                        paddingHorizontal: 12,
                    },
                    null,
                ],
            }}>
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginBottom: 6 }}>
                                <Image source={require('../../assets/img/Group.png')}></Image>
                            </View>
                            <Text style={{ color: '#CD2027', fontWeight: 500, fontSize: 12, lineHeight: 16 }}>
                                Sách
                            </Text>
                        </View>
                    ),
                }}
                name='BookList'
                component={BookList}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginBottom: 6 }}>
                                <Image source={require('../../assets/img/speak.png')}></Image>
                            </View>
                            <Text style={{ fontWeight: 500, fontSize: 12, lineHeight: 16 }}>Phát âm</Text>
                        </View>
                    ),
                }}
                name='Speak'
                component={Course}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginBottom: 6 }}>
                                <Image source={require('../../assets/img/Work.png')}></Image>
                            </View>
                            <Text style={{ fontWeight: 500, fontSize: 12, lineHeight: 16 }}>Khóa học</Text>
                        </View>
                    ),
                }}
                name='Course'
                component={Main}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginBottom: 6 }}>
                                <Image source={require('../../assets/img/Activity.png')}></Image>
                            </View>
                            <Text style={{ fontWeight: 500, fontSize: 12, lineHeight: 16 }}>Tiện ích</Text>
                        </View>
                    ),
                }}
                name='Tools'
                component={Speak}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginBottom: 6 }}>
                                <Image source={require('../../assets/img/main.png')}></Image>
                            </View>
                            <Text style={{ fontWeight: 500, fontSize: 12, lineHeight: 16 }}>Cá nhân</Text>
                        </View>
                    ),
                }}
                name='Main'
                component={Tools}
            />
        </Tab.Navigator>
    )
}
const TabsContainer = () => {
    return (
        // <NavigationContainer>
        <MyTabs />
        // </NavigationContainer>
    )
}

export default TabsContainer

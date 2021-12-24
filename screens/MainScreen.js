import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';
import DummyScreen from './DummyScreen'

const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === 'Screen_A') {
                        iconName = 'autoprefixer';
                        size = focused ? 25 : 20;
                        color = focused ? '#ee4' : '#555';
                    } else if (route.name === 'Screen_B') {
                        iconName = 'btc';
                        size = focused ? 25 : 20;
                        color = focused ? '#ee4' : '#555';
                    } else if (route.name === 'Screen_C') {
                        iconName = 'cuttlefish';
                        size = focused ? 25 : 20;
                        color = focused ? '#ee4' : '#555';
                    } else if (route.name === 'Screen_D') {
                        iconName = 'dyalog';
                        size = focused ? 25 : 20;
                        color = focused ? '#ee4' : '#555';
                    }

                    return (
                        <FontAwsome5
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    )
                }
            })}
            barStyle={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen
                name='Screen_A'
                component={DummyScreen}
            />
            <Tab.Screen
                name='Screen_B'
                component={DummyScreen}
            />
            <Tab.Screen
                name='Screen_C'
                component={DummyScreen}
            />
            <Tab.Screen
                name='Screen_D'
                component={DummyScreen}
            />
        </Tab.Navigator>
    )
}
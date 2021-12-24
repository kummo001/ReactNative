import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                header: () => null
            }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
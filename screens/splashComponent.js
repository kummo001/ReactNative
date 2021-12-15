import React from 'react';
import { StatusBar, StyleSheet, Text, View,Image, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './loginComponent';

function SplashScreen ({navigation}) {

    //Delay 4s to go to 'Login screen'
    setTimeout(() => {
        navigation.navigate('Login')
    }, 4000);

    return (
        <View style={{backgroundColor: "white", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar hidden={true} />
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../res/images/SplashScreen.png')} resizeMode='contain' style={{flex: 1}}/>
            </View>
        </View>
    );
}

//Define stack and route to 'Navigate'
const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }

export default function SplashFirst() {
    return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    );
}
  
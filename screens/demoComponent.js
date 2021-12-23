import React from 'react';
import { View, Image, Text, StatusBar } from 'react-native';

function DemoComponent () {
    return (
        <View style={{backgroundColor: "green", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar hidden={false} translucent={true} backgroundColor='transparent' barStyle='dark-content'/>
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../res/images/SplashScreen.png')} resizeMode='contain' style={{flex: 1}}/>
            </View>
            <Text>DEMO SCREEN</Text>
        </View>
    );
}

export default DemoComponent;
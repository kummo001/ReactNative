import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View, Text, StyleSheet } from 'react-native';
// import Tabs from '../tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DemoComponent from './demoComponent';

const Tab = createBottomTabNavigator();

function Tabs () {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    height: 70,
                }
            }}
        >
            <Tab.Screen name='Beranda' component={DemoComponent} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconBottomBar}>
                        <Image
                            source={require('../res/images/ic_home_inactive.png')}
                            resizeMode='contain'
                            style={{
                                height: 23,
                                width: 23,
                                tintColor: focused ? '#54C2E6' : null,
                            }}/>
                        <Text style={{fontSize: 10, color: focused ? '#54C2E6' : '#7B797A', paddingTop: 4}}>Beranda</Text>
                    </View>
                )
            }}/>

            <Tab.Screen name='Rekening' component={DemoComponent} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconBottomBar}>
                        <Image
                            source={require('../res/images/ic_account_inactive.png')}
                            resizeMode='contain'
                            style={{
                                height: 23,
                                width: 23,
                                tintColor: focused ? '#54C2E6' : null,
                            }}/>
                        <Text style={{fontSize: 10, color: focused ? '#54C2E6' : '#7B797A', paddingTop: 4}}>Rekening</Text>
                    </View>
                )
            }}/>

            <Tab.Screen name='QRIS' component={DemoComponent} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.circle}>
                        <Image
                            source={require('../res/images/QR.png')}
                            resizeMode='contain'
                            style={{
                                height: 65,
                                width: 65,
                            }}/>
                    </View>
                )
            }}/>
            
            <Tab.Screen name='Anggaran' component={DemoComponent} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconBottomBar}>
                        <Image
                            source={require('../res/images/ic_budgeting_inactive.png')}
                            resizeMode='contain'
                            style={{
                                height: 23,
                                width: 23,
                                tintColor: focused ? '#54C2E6' : null,
                            }}/>
                        <Text style={{fontSize: 10, color: focused ? '#54C2E6' : '#7B797A', paddingTop: 4}}>Anggaran</Text>
                    </View>
                )
            }}/>

            <Tab.Screen name='Lainnya' component={DemoComponent} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconBottomBar}>
                        <Image
                            source={require('../res/images/ic_other_inactive.png')}
                            resizeMode='contain'
                            style={{
                                height: 23,
                                width: 23,
                                tintColor: focused ? '#54C2E6' : null,
                            }}/>
                        <Text style={{fontSize: 10, color: focused ? '#54C2E6' : '#7B797A', paddingTop: 4}}>Lainnya</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}

function MainScreen () {
    return(
        <NavigationContainer independent={true}>
            <Tabs/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    iconBottomBar:{
        backgroundColor: "white",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },
    circle: {
        width: 73,
        height: 73,
        borderRadius: 73 / 2,
        marginBottom: 20,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default MainScreen;
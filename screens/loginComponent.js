import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  BackHandler,
  Alert,
  Image,
  ImageBackground,
  Button,
  ToastAndroid,
  TouchableHighlight
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

function LoginScreen () {

  //Back action exit app
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  
  //Render UI
  return (
    <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
      <ImageBackground source={require('../res/images/Sky.png')} resizeMode='contain' style={{width: 415, height: 345}}>
        <StatusBar hidden={false} translucent={true} backgroundColor='transparent' barStyle='dark-content'/>
        <TouchableHighlight onPress={()=>ToastAndroid.show("A pikachu!", ToastAndroid.SHORT)} underlayColor='transparent'>
        <Image source={require('../res/images/BackButton.png')} resizeMode='contain' style={{width: 25, height: 25, marginTop: 45, marginLeft: 30}}/>
        </TouchableHighlight>
        <View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 0}}>
          <Image source={require('../res/images/SplashScreen.png')} resizeMode='contain' style={{width: 170, height: 30}}/>
          <Text style={{ color: 'black', fontSize: 17, textAlign: 'center', paddingTop: 40}}>Selemat sore, {'\n'} ada yang bisa kami bantu?</Text>
        </View>
      </ImageBackground>

      <View style={{flex: 1}}>
        <Text style={{ color: 'black', fontSize: 17, textAlign: 'left', paddingTop: 5, paddingLeft: 45}}>Username</Text>
        <View style={styles.borderTextLogin}>
          <TextInput style={{fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center'}}/>
        </View>

        <Text style={{ color: 'black', fontSize: 17, textAlign: 'left', paddingTop: 30, paddingLeft: 45, justifyContent: 'center', alignItems: 'center'}}>Pasword</Text>
        <View style={styles.borderTextLogin}>
          <TextInput style={{fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center'}} secureTextEntry= {true}/>
        </View>

        <TouchableHighlight onPress={()=>ToastAndroid.show("A pikachu appeared nearby!", ToastAndroid.SHORT)} underlayColor='white'>
          <View style={{backgroundColor: '#3EB6E6', borderRadius: 30, height: 45, marginTop: 25, marginLeft: 35, marginRight: 35, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 14}}>MASUK</Text>
          </View>
        </TouchableHighlight>
      </View>
  
      <View style={{flex: 1, alignItems: 'flex-end', backgroundColor: 'white', marginTop: 200, paddingBottom: 20,flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', alignContent: 'center', flex: 1}}>
          <TouchableHighlight>
            <Text style={styles.clickText}>Bantuan login</Text>
          </TouchableHighlight>
          
          <View style={{backgroundColor: '#3EB6E6', height: 36, width: 2, opacity: 0.25}}></View>
          
          <TouchableHighlight>
            <Text style={styles.clickText}>Hungbungi kami</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundContainer:{
    width: 415,
    height: 415,
  },
  logoContainer:{
    width: 415,
    height: 415,
  },
  normalText:{
    color: 'black',
    fontSize: 17,
    textAlign: 'center'
  },
  clickText:{
    fontWeight: 'bold',
    color: '#3EB6E6',
    fontSize: 14,
    textAlign: 'center'
  },
  borderTextLogin:{
    borderColor: '#67cdf2',
    borderWidth: 1.5,
    borderRadius: 30,
    marginTop: 5,
    marginLeft: 35,
    marginRight: 35,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
})

export default LoginScreen;
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
  TouchableHighlight,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './mainComponent';

function LoginScreen ({navigation}) {

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

  //State username & password
  const [stUsername, setUsername] = React.useState('');
  const [stPassword, setPassword] = React.useState('');
  const [visibleError, setVisibleError] = React.useState(false);
  const [visibleModalForget, setVisibleModalForget] = React.useState(false);
  const [visibleModalShare, setVisibleModalShare] = React.useState(false);

  const pressLogin = () => {
    if (stUsername == 'AndyHuynh' && stPassword == '123456') {
      navigation.navigate('Main')
    }
    else{
      setVisibleError(true)
    }
  }
  
  //Render Login UI
  return (
    <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
      <ImageBackground source={require('../res/images/Sky.png')} resizeMode='contain' style={{width: 415, height: 345, top: 0}}>
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
        {/* PaddingTop 5 */}
        <View style={{marginTop: 5}}>
          <Text style={styles.textLogin}>Username</Text>
          <View style={styles.borderTextInputLogin}>
            <TextInput style={styles.textInputLogin} onChangeText={setUsername}/>
          </View>
        </View>

        {/* PaddingTop 30 */}
        <View style={{marginTop: 30}}>
          <Text style={styles.textLogin}>Pasword</Text>
          <View style={styles.borderTextInputLogin}>
            <TextInput style={styles.textInputLogin} secureTextEntry= {true} onChangeText={setPassword}/>
          </View>
        </View>

        <TouchableHighlight disabled={stUsername && stPassword ? false : true} onPress={()=> pressLogin()} underlayColor='white'>
          <View style={{backgroundColor: stUsername && stPassword ? '#3EB6E6' : '#A8E0F2', borderRadius: 30, height: 45, marginTop: 25, marginLeft: 35, marginRight: 35, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 14}}>MASUK</Text>
          </View>
        </TouchableHighlight>
        
        {
          visibleError ? (
            <View style={{marginTop: 18, marginLeft: 35, marginRight: 35, flexDirection: 'row'}}>
              <Image source={require('../res/images/warning.png')} resizeMode='contain' style={{height: 18, width: 18}}/>
              <Text style={{color: '#FF0000', fontSize: 11, textAlign: 'center', fontWeight: 'bold' }}>{warningText}</Text>
            </View>
          ) : null
        }
        
      </View>
  
      <View style={styles.bottomButton}>
        <View style={styles.insedeBottomButton}>
          <TouchableHighlight onPress={()=> setVisibleModalForget(true)} underlayColor='transparent'>
            <Text style={styles.clickText}>Bantuan login</Text>
          </TouchableHighlight>
          
          <View style={{backgroundColor: '#3EB6E6', height: 36, width: 2, opacity: 0.25}}/>
          
          <TouchableHighlight onPress={()=> setVisibleModalShare(true)} underlayColor='transparent'>
            <Text style={styles.clickText}>Hungbungi kami</Text>
          </TouchableHighlight>
        </View>
      </View>

      {/* Modal fogot password */}
      <Modal visible={visibleModalForget} animationType='fade' transparent={true} statusBarTranslucent={true}>
        <View style={{backgroundColor: '#000000AA', flex: 1}}>
        </View>
      </Modal>
      <Modal visible={visibleModalForget} animationType='slide' transparent={true} statusBarTranslucent={true}>
        <View style={{backgroundColor: 'transparent', flex: 1}}>

          <TouchableWithoutFeedback onPress={()=> setVisibleModalForget(false)}>
            <View style={{flex: 1, backgroundColor: 'transparent'}}>
            </View>
          </TouchableWithoutFeedback>

          <View style={{position: 'absolute', height: 300, backgroundColor: 'white', width: '100%', flex: 1, bottom: 0, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image source={require('../res/images/lock.png')} resizeMode='contain' style={{width: 36, height: 36, paddingLeft: 40, paddingRight: 40}} />
              <View style={{paddingRight: 36}}>
                <Text style={{color: 'black', fontSize: 17, textAlign: 'left', fontWeight: 'bold'}}>Lupa Password</Text>
                <Text style={{color: '#7B797A'}} numberOfLines={2}>Buat password barumu dengan beberapa{'\n'}langkah mudah.</Text>
              </View>
            </View>

            <View style={{backgroundColor: '#7B797A', height: 1.2, marginLeft: 80}}></View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image source={require('../res/images/person.png')} resizeMode='contain' style={{width: 36, height: 36, paddingLeft: 40, paddingRight: 40}} />
              <View style={{paddingRight: 36}}>
                <Text style={{color: 'black', fontSize: 17, textAlign: 'left', fontWeight: 'bold'}}>Lupa Username</Text>
                <Text style={{color: '#7B797A'}} numberOfLines={2}>Jangan kuatir, kami akan membantumu{'\n'}untuk mendapatkan username kamu.</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={visibleModalShare} animationType='slide' transparent={true} statusBarTranslucent={true}>
        <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'column'}}>
          <ImageBackground source={require('../res/images/background_share.png')} resizeMode='contain' style={{width: 415, height: 200, top: 0, flex: 1}}>
            <TouchableHighlight onPress={()=> setVisibleModalShare(false)} underlayColor='transparent'>
              <Image source={require('../res/images/BackButton.png')} resizeMode='contain' style={{width: 25, height: 25, marginTop: 45, marginLeft: 30}}/>
            </TouchableHighlight>
            <View style={{justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('../res/images/kangaroo_share.png')} resizeMode='contain' style={{width: 250, height: 250}}/>
              <Text style={{color: 'black', textAlign: 'center'}}>Kami siap membantu Kamu</Text>
              <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>setiap hari selama 24 jam.</Text>
            </View>
          </ImageBackground>

          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignContent: 'center'}}>
              <View style={{flexDirection: 'column', flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('../res/images/smartphone_share.png')} resizeMode='contain' style={{width: 40, height: 40}}/>
                <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold', paddingTop: 5}}>Telepon</Text>
                <Text style={{color: '#7B797A', fontSize: 9, fontWeight: 'bold'}}>(Dalam negeri)</Text>
              </View>

              <View style={{backgroundColor: '#7B797A', height: 70, width: 1, opacity: 0.25}}></View>

              <View style={{flexDirection: 'column', flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('../res/images/phone_share.png')} resizeMode='contain' style={{width: 40, height: 40}}/>
                <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold', paddingTop: 5}}>Telepon</Text>
                <Text style={{color: '#7B797A', fontSize: 9, fontWeight: 'bold'}}>(Luar negeri)</Text>
              </View>

              <View style={{backgroundColor: '#7B797A', height: 70, width: 1, opacity: 0.25}}></View>

              <View style={{flexDirection: 'column', flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('../res/images/mail_share.png')} resizeMode='contain' style={{width: 40, height: 40}}/>
                <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold', paddingTop: 5}}>Telepon</Text>
                <Text style={{color: '#7B797A', fontSize: 9, fontWeight: 'bold'}}>(Lampiran max 3MB)</Text>
              </View>

            </View>

            <View style={{backgroundColor: '#7B797A', height: 1, width: '100%', opacity: 0.25}}></View>

            <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
              <Text style={{color: 'black', textAlign: 'center', paddingTop: 50}}>Terhubung juga dengan media sosial kami.</Text>
              <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignContent: 'center'}}>
                <Image source={require('../res/images/facebook.png')} resizeMode='contain' style={{width: 30, height: 30}}/>
                <Image source={require('../res/images/twitter.png')} resizeMode='contain' style={{width: 30, height: 30}}/>
                <Image source={require('../res/images/insta.png')} resizeMode='contain' style={{width: 30, height: 30}}/>
              </View>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};

const Stackk = createStackNavigator();

function MyStackk() {
  return (
    <Stackk.Navigator>
      <Stackk.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stackk.Screen options={{headerShown: false}} name="Main" component={MainScreen} />
    </Stackk.Navigator>
  );
}

const warningText = 'Username/Password yang kamu masukkan salah,\natau user Kamu telah kedaluwarsa/diaktifkan di perangkat lain.'

const styles = StyleSheet.create({
  clickText:{
    fontWeight: 'bold',
    color: '#3EB6E6',
    fontSize: 14,
    textAlign: 'center'
  },
  borderTextInputLogin:{
    borderColor: '#67cdf2',
    borderWidth: 1.5,
    borderRadius: 30,
    marginTop: 5,
    marginLeft: 35,
    marginRight: 35,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLogin:{
    color: 'black',
    fontSize: 17,
    textAlign: 'left',
    paddingLeft: 45,
    paddingTop: 5
  },
  textInputLogin:{
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonLogin:{
    borderRadius: 30,
    height: 45,
    marginTop: 25,
    marginLeft: 35,
    marginRight: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton:{
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    marginTop: 200,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  insedeBottomButton:{
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1
  }
  
})

export default function LoginScreenStack() {
  return (
    <NavigationContainer independent={true}>
      <MyStackk/>
    </NavigationContainer>
  );
}
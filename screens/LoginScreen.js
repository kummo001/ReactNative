import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert 
} from 'react-native';

export default function LoginScreen({ navigation }) {

  const [userName, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onPressHandler = () => {
    if (userName == 'AndyHuynh' && password == '123456') {
      navigation.navigate('Main');
    } else {
      Alert.alert(
        "Login Failed",
        "Your user name or password is incorrect",
        [
          {
            text: "Ok",
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  }



  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Image/bg_login_day.png')} style={styles.imageBg} resizeMode='stretch'>
        <Image source={require('../Image/ic.png')} style={{ width: 150, height: 20 }} ></Image>
        <Text style={styles.tilte}>Selamat pagi, semangat terus ya hari ini!</Text>
      </ImageBackground>

      <View style={styles.loginSection}>
        <Text style={styles.userTitle}>User name</Text>
        <TextInput style={styles.input} onChangeText={setUsername} />
        <Text style={styles.userTitle}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} onChangeText={setPassword} />
        <TouchableOpacity style={styles.loginButton} onPress={onPressHandler}>
          <Text style={styles.loginButtonTitle}>MASUK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ddd'
  },
  tilte: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 40
  },
  loginSection: {
    flex: 4.5,
    marginStart: 30,
    marginEnd: 30
  },
  imageBg: {
    flex: 5.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    imageStyle: {
      resizeMode: 'cover'
    }
  },
  userTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#5da4f5',
    backgroundColor: '#fff',
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    paddingStart: 20,
    fontSize: 18
  },
  loginButton: {
    width: 350,
    height: 45,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5da4f5',
    marginTop: 20,
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white',
  },
});

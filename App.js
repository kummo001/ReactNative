import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./Image/bg_login_day.png')} style={styles.imageBg}>
        {/* <Image source={require('./Image/ic_mobile_plus_logo')}></Image> */}
        <Text style={styles.tilte}>Selamat pagi, semangat terus ya hari ini!</Text>
      </ImageBackground>

      <View style={styles.loginSection}>
        <Text style={styles.userTitle}>User name:</Text>
        <TextInput style={styles.userTitle}
          placeholder="Enter your password"/>
        <Text style={styles.userTitle}>Pass password:</Text>
        <Text style={styles.userTitle}>This is text input place for password</Text>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonTitle}>LOGIN</Text>
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
    fontWeight: 'bold'
  },
  loginSection: {
    flex: 3.8,
    marginTop: 30,
    marginStart: 30,
  },
  imageBg: {
    flex: 6.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  loginButton: {
    width: 350,
    height: 45,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a7ae8'
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },

});

export default App;

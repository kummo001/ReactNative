import {AppRegistry} from 'react-native';

//Screen
import SplashFirst from './screens/splashComponent';
import LoginScreen from './screens/loginComponent';
import MainScreen from './screens/mainComponent';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SplashFirst);

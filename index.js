import {AppRegistry} from 'react-native';

//Screen
import SplashFirst from './screens/splashComponent';
import LoginScreen from './screens/loginComponent';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SplashFirst);

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

/*
    Importamos libreria especializada en los gestos como swipe up y asi,
    react-native posee como manejar gestos pero no es lo mejor porque afecta
    el rendimiento de la aplicacion.
*/

AppRegistry.registerComponent(appName, () => App);

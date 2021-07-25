import {StyleSheet} from 'react-native';

/*
   flex: 1 hace que ocupe 1 fraccion del contenido actual,
   por defecto el flex en react-native se direcciona como
   columna.
*/
export const coinsScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  titleText: {
    color: '#fff',
    textAlign: 'center'
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
    alignSelf: 'stretch'
  },
  btnText: {
    color: '#fff',
    textAlign: 'center'
  }
});

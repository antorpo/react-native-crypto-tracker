import {StyleSheet} from 'react-native';

/*
   flex: 1 hace que ocupe 1 fraccion del contenido actual y 
   todo el ancho o largo dependiendo de la direccion del flex,
   por defecto el flex en react-native se direcciona como
   columna.
*/
export const coinsScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
    alignSelf: 'stretch',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    flex: 2,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#f72f2f',
    borderBottomColor: '#f72f2f',
    borderBottomWidth: 1,
    marginRight: 80,
    marginLeft: 80,
  },
});

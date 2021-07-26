import {Platform, StyleSheet} from 'react-native';

/*
   flex: 1 hace que ocupe 1 fraccion del contenido actual y 
   todo el ancho o largo dependiendo de la direccion del flex,
   por defecto el flex en react-native se direcciona como
   columna.
*/
export const coinsScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d414a',
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

/*
  Parametro opcional: Color
  Es un parametro opcional ya que recibe un argumento por defecto ('green')

  Este estilo lo volvemos primero una funcion ya que vamos a pasarle una variable
  que sera el valor de una propiedad CSS. 

  Para poder pintar el cambio del porcentaje.
*/
export const coinsItem = (color = 'green') =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 16,
      justifyContent: 'space-between',
      borderBottomColor: '#e0e0e0',
      borderBottomWidth: 1,
      paddingLeft: Platform.OS == 'ios' ? 0 : 16,
      marginLeft: Platform.OS == 'ios' ? 16 : 0,
    },
    row: {
      flexDirection: 'row',
    },
    symbolText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      marginRight: 12,
    },
    nameText: {
      color: '#fff',
      fontSize: 14,
      marginRight: 16,
    },
    percentText: {
      color: color,
      fontSize: 14,
      marginRight: 8,
    },
    priceText: {
      color: '#fff',
      fontSize: 14,
    },
    imageIcon: {
      width: 22,
      height: 22,
    },
  });


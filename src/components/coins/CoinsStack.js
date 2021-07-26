/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from '../coinDetail/CoinDetailScreen';
import {colors} from '../../res/colors'

/*
    Creamos una instancia de StackNavigator para todo lo relacionado con Coins
    const Stack = createStackNavigator();

    Cuando un componente es llamado desde un <StackNavigator> usando un <Screen>
    al componente se le inyectan unas props: 
      - navigation
      - route
    
    Que nos van a permitir saber cual es su estado dentro de la pila de navegacion.
*/
const {Navigator, Screen} = createStackNavigator();

// Funct-Component (Stateless)
export const CoinsStack = props => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl
        },
        headerTintColor: colors.white
      }}>
      <Screen name="Coins" component={CoinsScreen} />
      <Screen name="CoinDetail" component={CoinDetailScreen}/>
    </Navigator>
  );
};

/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';

/*
    Creamos una instancia de StackNavigator para todo lo relacionado con Coins
    const Stack = createStackNavigator();
*/
const {Navigator, Screen} = createStackNavigator();

export const CoinsStack = props => {
  return (
    <Navigator>
      <Screen name="Coins" component={CoinsScreen} />
    </Navigator>
  );
};

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CoinsStack} from './src/components/coins/CoinsStack';

/*
  NavigationContainer: Posee el estado de la navegacion dentro de la app.
*/
const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
  );
};

export default App;

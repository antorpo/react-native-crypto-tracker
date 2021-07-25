import React from 'react';
import {View, Text} from 'react-native';

// Funct-Component (Stateless)
export const CoinsItem = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.symbol}</Text>
    </View>
  );
};

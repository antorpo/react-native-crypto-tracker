import React from 'react';
import { Text, View } from 'react-native';
import {coinMarketItem as styles} from './styles/styles'

// Funct-Component (Stateless)
export const CoinMarketItem = ({item}) => {
  return(
      <View style={styles.container}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price_usd}</Text>
      </View>
  );
};
 
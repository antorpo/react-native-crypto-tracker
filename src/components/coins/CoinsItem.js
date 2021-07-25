import React from 'react';
import {View, Text, Image} from 'react-native';
import {coinsItem as styles} from './styles/styles';

/*
  El primer cointainer hace que todo lo interior este en fila por el flexDirection: 'row', 
  pero al tener otro View adentro con 2 elementos hijos debemos volver a a dar flexDirection: 'row'
  ya que el View esta en fila pero sus 2 hijos por defecto tienen flexDirection: 'column'
*/

// Funct-Component (Stateless)
export const CoinsItem = ({item}) => {
  const colorPercent = item.percent_change_1h < 0 ? 'red' : 'green';
  const getImgArrow =
    item.percent_change_1h < 0
      ? require('../../assets/arrow_down.png')
      : require('../../assets/arrow_up.png');

  return (
    <View style={styles().container}>
      <View style={styles().row}>
        <Text style={styles().symbolText}>{item.symbol}</Text>
        <Text style={styles().nameText}>{item.name}</Text>
        <Text style={styles().priceText}>{`$${item.price_usd}`}</Text>
      </View>

      <View style={styles().row}>
        <Text style={styles(colorPercent).percentText}>
          {item.percent_change_1h}
        </Text>
        <Image source={getImgArrow} style={styles().imageIcon}/>
      </View>
    </View>
  ); 
};

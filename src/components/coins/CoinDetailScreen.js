/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {coinDetailScreen as styles} from './styles/styles';

// Class-Component (Stateful)
class CoinDetailScreen extends Component {
  state = {
    coin: {},
  };

  componentDidMount() {
    // Extraemos la moneda
    const {coin} = this.props.route.params;

    // Cambiamos el titulo en el Navigator
    this.props.navigation.setOptions({title: coin.symbol});

    this.setState({
      coin,
    });
  }

  /*
    Usar imagenes remotas: 
    Mala practica para el rendimiento de la aplicacion ya que toca consumirlas y 
    sumar el tiempo de respuesta del servidor que las envia.
  */
  getSymbolIcon = name => {
    if (name) {
      const symbol = name.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  };

  render() {
    const {coin} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Image style={styles.iconImage} source={{uri: this.getSymbolIcon(coin.name)}} />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>
      </View>
    );
  }
}

export default CoinDetailScreen;

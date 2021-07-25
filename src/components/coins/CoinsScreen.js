/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';
import {coinsScreen as styles} from './styles/styles';
import Http from '../../libs/http';
/*
  <Pressable> podriamos compararlo con un <a> de html,
  nos sirve para crear vinculos.
*/

// Class-Component (Stateful)
class CoinsScreen extends Component {
  state = {
    coins: [],
  };

  // Se llama justo depues de montar el componente
  componentDidMount = async () => {
    const response = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );

    this.setState({
      ...this.state,
      coins: response.data,
    });
  };

  handlePress = () => {
    // navigate() recibe el nombre del Screen definido en el StackNavigator
    this.props.navigation.navigate('CoinDetail');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Coins Screen</Text>
        <Pressable style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>Go to detail</Text>
        </Pressable>
      </View>
    );
  }
}

export default CoinsScreen;

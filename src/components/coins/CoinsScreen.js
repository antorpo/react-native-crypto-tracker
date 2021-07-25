/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';
import {coinsScreen as styles} from './styles/styles';

/*
  <Pressable> podriamos compararlo con un <a> de html,
  nos sirve para crear vinculos.
*/

// Class-Component (Stateful)
class CoinsScreen extends Component {
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

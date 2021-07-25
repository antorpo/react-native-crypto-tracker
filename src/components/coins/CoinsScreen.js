/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, Pressable} from 'react-native';
import {coinsScreen as styles} from './styles/styles';
import {CoinsItem} from './CoinsItem';
import Http from '../../libs/http';

/*
  <Pressable> podriamos compararlo con un <a> de html,
  nos sirve para crear vinculos.
*/

// Class-Component (Stateful)
class CoinsScreen extends Component {
  state = {
    coins: [],
    loading: false,
    error: null,
  };

  // Se llama justo depues de montar el componente
  componentDidMount = async () => {
    try {
      this.setState({
        loading: true,
      });

      const response = await Http.instance.get(
        'https://api.coinlore.net/api/tickers/',
      );

      this.setState({
        ...this.state,
        coins: response.data,
        loading: false,
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: err,
      });
    }
  };

  handlePress = () => {
    // navigate() recibe el nombre del Screen definido en el StackNavigator
    this.props.navigation.navigate('CoinDetail');
  };

  render() {
    const {coins, loading, error} = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator color="#fff" size="large" style={styles.loader} />
        ) : (
          <FlatList
            data={coins}
            renderItem={({item}) => <CoinsItem item={item} />}
          />
        )}

        {error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>Error fetching data!</Text>
          </View>
        )}
      </View>
    );
  }
}

export default CoinsScreen;

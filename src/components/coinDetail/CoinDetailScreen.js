/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text, SectionList, FlatList} from 'react-native';
import {CoinMarketItem} from './CoinMarketItem';
import {coinDetailScreen as styles} from './styles/styles';
import Http from '../../libs/http';

// Class-Component (Stateful)
class CoinDetailScreen extends Component {
  state = {
    coin: {},
    markets: [],
  };

  componentDidMount() {
    // Extraemos la moneda
    const {coin} = this.props.route.params;

    // Cambiamos el titulo en el Navigator
    this.props.navigation.setOptions({title: coin.symbol});

    this.getMarkets(coin.id);

    this.setState({
      coin,
    });
  }

  getMarkets = async coinId => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const markets = await Http.instance.get(url);
    this.setState({
      markets,
    });
  };

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

  getSections = coin => {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      },
    ];

    return sections;
  };

  render() {
    const {coin, markets} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Image
            style={styles.iconImage}
            source={{uri: this.getSymbolIcon(coin.name)}}
          />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>

        <SectionList
          style={styles.section}
          sections={this.getSections(coin)}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )}
        />

        <Text style={styles.marketTitle}>Markets</Text>
        <FlatList
          style={styles.list}
          horizontal={true}
          data={markets}
          renderItem={({item}) => <CoinMarketItem item={item} />}
          keyExtractor={({item, index}) => index}
        />
      </View>
    );
  }
}

export default CoinDetailScreen;

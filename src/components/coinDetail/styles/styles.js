import {StyleSheet} from 'react-native';

export const coinDetailScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272c35',
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  subHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 16,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0, 0.3)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    maxHeight: 220,
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16,
  },
  marketTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 18,
    marginLeft: 18,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
});

export const coinMarketItem = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, 0.3)',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    padding: 16,
    margin: 8,
    alignItems: 'center',
  },
  nameText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  priceText: {
    color: '#fff',
  },
});

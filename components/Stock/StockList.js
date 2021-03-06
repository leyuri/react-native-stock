import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'SPY' },
            { key: 'CMCSA' },
            { key: 'KMI' },
            { key: 'INTC' },
            { key: 'MU' },
            { key: 'Joel' },
            { key: 'GDX' },
            { key: 'GE' },
            { key: 'BAC' },
            { key: 'EEM' },
            { key: 'XLF' },
            { key: 'AAPL' },
            { key: 'MSFT' },
            { key: 'SIRI' },
            { key: 'HPQ' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
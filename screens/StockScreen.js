import * as React from 'react';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import StockList from "../components/Stock/StockList"
import StockSearch from "../components/Stock/StockSearch"

export default function LinksScreen() {
  return (
    <ScrollView >
    <StockSearch/>
    <StockList />
    </ScrollView>
  );
}




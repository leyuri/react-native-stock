import React from 'react'
import { Text, View, FlatList } from 'react-native'
import OverView from '../components/Home/OverView'
import {OverviewStyle} from '../styles/styles';
// import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    symbol: 'APPL',
    current_price: '1231242',
    avg_entry_price: '1112312312',
    change_today: 14,
    qty: 12

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    symbol: 'IBM',
    current_price: '623412',
    avg_entry_price: '1112312312',
    change_today: 14,
    qty: 10
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    symbol: 'AMAZ',
    current_price: '7531242',
    avg_entry_price: '1112312312',
    change_today: 14,
    qty: 11
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d12',
    title: 'Third Item',
    symbol: 'AMAZ',
    current_price: '7531242',
    avg_entry_price: '1112312312',
    change_today: 14,
    qty: 12
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d31',
    title: 'Third Item',
    symbol: 'AMAZ',
    current_price: '7531242',
    avg_entry_price: '1112312312',
    change_today: 14,
    qty: 12
  },
];

const symbols = [ 'DIA', 'SPY', 'QQQ', 'IWM']



class Overview extends React.Component {

    renderRow = ({item}) => {
      return (
          <View key={item.id} style={OverviewStyle.position}>
            <View style={OverviewStyle.positionLeftCell}>
              <Text style={OverviewStyle.symbol}>{item.symbol}</Text>
      <Text style={OverviewStyle.subheading}>{item.qty} @ {item.avg_entry_price}</Text>
            </View>

            <View style={OverviewStyle.positionRightCell}>
              <Text tyle={OverviewStyle.price}>{item.current_price}</Text>
              <Text style={OverviewStyle.subheading}>
                <Ionicons name="md-arrow-dropup" size={32} color="green"></Ionicons>
                {(item.change_today * 100).toFixed(2)}</Text>
            </View>
          </View>
      )
    }

    render() {
        return <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={OverviewStyle.account}>
              <Text style={OverviewStyle.heading}>Account</Text>

              <View style={OverviewStyle.accountCell}>
                <View style={OverviewStyle.leftCell}>
                  <Text style={OverviewStyle.label}>Buying Power</Text>
                  <Text>12312400</Text>
                  <Text style={OverviewStyle.label}>Long Market Value</Text>
                  <Text>2314342341</Text>
                </View>
                <View style={OverviewStyle.rightCell}>
                  <Text style={OverviewStyle.label}>Portolio Value</Text>
                  <Text>1394832</Text>
                  <Text style={OverviewStyle.label}>Cash</Text>
                  <Text>-123121</Text>
                </View>
              </View>
              
            </View> 
            
            <View style={{flex:4 , padding: 15, }}>
              <Text style={OverviewStyle.heading}>Market</Text>
              <View style={{flex:2, flexDirection: 'row'}}>
                <View style={OverviewStyle.scoreboardItem}>
                  <Text style={OverviewStyle.indexSymbol}>DIA</Text>
                  <Ionicons name="md-arrow-dropup" size={32} color="white"></Ionicons>
                    <Text style={OverviewStyle.indexPrice}>1231</Text>
                </View>
                <View style={OverviewStyle.scoreboardItem}>
                  <Text style={OverviewStyle.indexSymbol}>SPY</Text>
                  <Ionicons name="md-arrow-dropup" size={32} color="white"></Ionicons>
                  <Text style={OverviewStyle.indexPrice}>5232</Text>
                </View>
                <View style={OverviewStyle.scoreboardItem}>
                  <Text style={OverviewStyle.indexSymbol}>QQQ</Text>
                  <Ionicons name="md-arrow-dropup" size={32} color="white"></Ionicons>
                    <Text style={OverviewStyle.indexPrice}>13123</Text>
                </View>
                <View style={OverviewStyle.scoreboardItem}>
                  <Text style={OverviewStyle.indexSymbol}>IWM</Text>
                  <Ionicons name="md-arrow-dropup" size={32} color="white"></Ionicons>
                    <Text style={OverviewStyle.indexPrice}>12312</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 5}}>
                <FlatList
                data = {DATA}
                renderItem={this.renderRow}
                keyExtractor={item => item.id}
                />

            </View>
            </View>
    }
}

export default Overview
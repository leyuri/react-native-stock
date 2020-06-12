import React from 'react'
import { Text, View } from 'react-native'
import OverView from '../components/Home/OverView'

class Overview extends React.Component {


    render() {
        return <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex:3 }}>
            <OverView/>
            </View> 
            <View style={{flex:2 , borderWidth: 1, borderColor: 'red'}}>
              <Text>US ETF Market</Text>

              <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex: 1, borderWidth: 1, borderColor: 'orange'}}><Text>DIA</Text></View>
                <View style={{flex: 1, borderWidth: 1, borderColor: 'orange'}}><Text>SPY</Text></View>
                <View style={{flex: 1, borderWidth: 1, borderColor: 'orange'}}><Text>QQQ</Text></View>
                <View style={{flex: 1, borderWidth: 1, borderColor: 'orange'}}><Text>IWM</Text></View>
              </View>
            </View>
            <View style={{flex:5 , borderWidth: 1, borderColor: 'yellow'}}>

            </View>
        </View>
    }
}

export default Overview
import { StyleSheet } from 'react-native'

export const OverviewStyle = StyleSheet.create({
    account: {
        margin: 15,
        flex:3, 
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    label:  {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    accountCell: {
        flex:1,
        flexDirection: 'row'
    },
    leftCell : {
        flex: 1,

    },
    rightCell : {
        flex: 1,

    },
    position: {
        flex: 1, 
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    positionLeftCell: {
        flex: 4
    },
    positionRightCell: {
        flex: 1
    },
    symbol : {
        fontSize: 16,
        fontWeight: 'bold',
        color:  'black'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color:  'black'
    },
    subheading: {
        color: '#808080'
    },
    indexSymbol: {
        fontSize :32,
        color: 'white'
    },
    indexPrice: {
        fontSize: 18,
        color: 'white'
    },
    scoreboardItem: {
        flex: 1,
        borderWidth: 1, 
        alignItems: 'center',
        backgroundColor: '#2590D5',
        fontWeight: 'bold',
        margin: 5,
        borderRadius: 5
    }
    
})
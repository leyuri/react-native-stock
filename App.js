import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store 만들어주기
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(logger,thunk)));

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <NavigationContainer linking={LinkingConfiguration}>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </Provider>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B81265',
  },
});

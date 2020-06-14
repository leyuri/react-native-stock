import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

import MyScreen from '../screens/MyScreen';
import OverviewScreen from '../screens/OverviewScreen';
import NewsScreen from '../screens/NewsScreen';
import StockScreen from '../screens/StockScreen';



const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={OverviewScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-speedometer" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Stock"
        component={StockScreen}
        options={{
          title: 'Stock',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-pulse" />,
        }}
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'News',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-podium" />,
        }}
      />
      <BottomTab.Screen
        name="My"
        component={MyScreen}
        options={{
          title: 'My',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Overview';
    case 'Stock':
      return 'Stock';
    case 'News':
      return 'General News';
    case 'My':
      return 'My Page';
      
  }
}

import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import NewsList from '../components/News/NewsList'

export default function LinksScreen() {
  return (
    <ScrollView >
      <NewsList/>
    </ScrollView>
  );
}

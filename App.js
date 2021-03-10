import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './plugins/plugin-gestion.js';
import { TypePlugin } from './plugins/plugin-gestion.js';

import {NavigationContainer} from '@react-navigation/native';
import { NavigationView } from './components/navigation.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Miaou je suis un chat {TypePlugin.VISIBLE}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWhite: {
    backgroundColor: '#fff',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './plugins/plugin-gestion.js';
import { TypePlugin } from './plugins/plugin-gestion.js';

import {NavigationContainer} from '@react-navigation/native';
import { NavigationView } from './components/navigation.js';

const Drawer = new NavigationView(['VIEW 1' , 'VIEW 2']).render(); /* createDrawerNavigator();*/
function DrawerContainer () {
  return (
  < Drawer/>/*.Navigator >
  < Drawer.Screen name = "Contactez-nous" component = {ContactUs} />
  < Drawer.Screen name = "Settings" component = {Settings} />
  </ Drawer.Navigator >*/
  );
  }
export default function App() {

  return (
    /*<View style={styles.container}>
      <Text>Miaou je suis un chat {TypePlugin.VISIBLE}</Text>
      <StatusBar style="auto" />
    </View>*/
    <NavigationContainer>
      < DrawerContainer />
    </NavigationContainer>
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
function ContactUs() {
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Contact Us</Text>
  </View>
  );
  }
  function Settings() {
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Settings screen</Text>
  </View>
  );
  }
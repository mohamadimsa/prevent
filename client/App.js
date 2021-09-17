import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import AuthStackScreen from './src/navigation/AuthStack'



export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

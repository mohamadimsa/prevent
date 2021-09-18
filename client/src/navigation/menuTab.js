import React from 'react';
import {createBottomTabNavigator } from'@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();
import HomeScreen from '../screen/HomeScreen';
import SearchStackScreen from '../screen/SearchScreen'


const TabsScreen = () => (
    <Tabs.Navigator  screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
  );
export default TabsScreen;
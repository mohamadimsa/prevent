import React from 'react';
import {createBottomTabNavigator } from'@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();
import HomeScreen from '../screen/HomeScreen';
import SearchStackScreen from './SerieStack'


const TabsScreen = () => (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
  );
export default TabsScreen;
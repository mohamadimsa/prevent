import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilStackScreen from './ProfilStack';
import TabsScreen from "./menuTab";
import ListScreen from '../screen/ListScreen';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfilStackScreen} />
    <Drawer.Screen name='Liste series' component={ListScreen}/>
  </Drawer.Navigator>
);
export default DrawerScreen;

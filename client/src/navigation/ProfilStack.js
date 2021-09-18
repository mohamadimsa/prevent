import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ProfilStack = createNativeStackNavigator();
import ProfilScreen from "../screen/ProfilScreen";
import MonCompteScreen from "../screen/MonCompteScreen"
const ProfilStackScreen = () => {
  return (
    <ProfilStack.Navigator  screenOptions={{headerShown: false}}>
      <ProfilStack.Screen name="profil" component={ProfilScreen} />
      <ProfilStack.Screen name="mon compte" component={MonCompteScreen} />
    </ProfilStack.Navigator>
  );
}
export default ProfilStackScreen;
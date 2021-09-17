import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AuthStack = createNativeStackNavigator();
import ConnectionScreen from "../screen/ConnectionScreen";
import InscriptionScreen from "../screen/InscriptionScreen";

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="connection" component={ConnectionScreen} />
      <AuthStack.Screen name="inscription" component={InscriptionScreen} />
    </AuthStack.Navigator>
  );
}
export default AuthStackScreen;
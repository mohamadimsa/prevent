
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const RootStack = createNativeStackNavigator();
import { useSelector } from "react-redux";
import{error,isAUth} from "../../src/redux/selectors";
import AuthStackScreen from './AuthStack';
import DrawerScreen from'./Draw';


const RootStackScreen = () => {
    const user = useSelector(isAUth)
    return(
  <RootStack.Navigator headerMode="none">
    {user ? (
      <RootStack.Screen name="App"component={DrawerScreen} options={{animationEnabled: false}}/>
    ) : (<RootStack.Screen name="Auth" component={AuthStackScreen} options={{animationEnabled: false}}/>
    )}
  </RootStack.Navigator>
  )
};

export default RootStackScreen;
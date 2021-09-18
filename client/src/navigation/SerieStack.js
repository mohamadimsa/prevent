import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const SerieStack = createNativeStackNavigator();
import  HomeScreen from '../screen/HomeScreen';
import DetaillSerie from '../screen/DetailleSerie';

const SerieStackScreen = () => {
    return (
        <SerieStack.Navigator>
            <SerieStack.Screen name="Home" component={HomeScreen} />
            <SerieStack.Screen name="DetaillSerie" component={DetaillSerie} />
        </SerieStack.Navigator>
    );
}
export default SerieStackScreen;
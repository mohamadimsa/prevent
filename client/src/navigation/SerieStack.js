import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const SerieStack = createNativeStackNavigator();

const FilmStackScreen = () => {
    return (
        <SerieStack.Navigator>
            <SerieStack.Screen name="Listeserie" component={}/>
            <SerieStack.Screen name="DetaillSerie" component={}/>
        </SerieStack.Navigator>
    );
}
export default FilmStackScreen;
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSerie } from "../api/serie/useSerie";
import { serieList } from "../../src/redux/selectors";
import {useSelector} from 'react-redux'


const HomeScreen = () => {
    const list = useSelector(serieList);
    const { getAll } = useSerie();
    useEffect(() => {getAll();}, [])
    
    return (
        <View>
            <Text>home page</Text>
        </View>
    )
}
export default HomeScreen;
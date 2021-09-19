import React from "react";
import { Text,View } from "react-native";
import SeriesCartes from "../compenent/SerieCartes";

const SearchScreen = ()=>{
    return(
        <View>
            <Text>page de recherche</Text>
            <SeriesCartes titre="un titre" description='une description vague djkdjkdhjjdhjdhdh'/>
        </View>
    )
}
export default SearchScreen;
import React from "react";
import { render } from "react-dom";
import {Text, View,Image} from "react-native";

const SeriesCartes =(props)=>{

    return (
        <View>
             <Image source={{uri:props.image}}/> 
            <Text>titre : {props.titre}</Text>
            <Text> description :{props.description}...</Text>
        </View>
    )

}

export default SeriesCartes;

import React from "react";
import { render } from "react-dom";
import {Text, View,Image} from "react-native";

const SeriesCartes =(props)=>{

    return (
        <View>
             <Image  style={{height: 100,width: 100}}  source={{uri: props.image}}/> 
            <Text>titre : {props.title}</Text>
            <Text> description :{props.description}...</Text>
        </View>
    )

}

export default SeriesCartes;

import React from "react";
import { render } from "react-dom";
import { Text, View, Image,Button } from "react-native";
import {useSerie} from '../api/serie/useSerie';

const SeriesCartes = (props) => {
    const {addSerie} = useSerie();

    return (
        <View>
            <Image style={{ height: 100, width: 100 }} source={{ uri: props.image }} />
            <Text>titre : {props.title}</Text>
            <Text> description :{props.description}...</Text>
            <Button title='add' onPress={() => addSerie(props.id)}></Button>
        </View>
    )

}

export default SeriesCartes;

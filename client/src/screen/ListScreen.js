import React, { useEffect } from "react";
import { Text, ScrollView } from "react-native";
import { useSerie } from '../api/serie/useSerie';
import { useSelector } from "react-redux";
import { favorite } from "../../src/redux/selectors";
import SeriesCart from "../compenent/SerieCartes"



const ListScreen = () => {
    
    const { addFavorite } = useSerie();
    const list = useSelector(favorite);
    useEffect(() => { addFavorite(list); }, [])
    console.log(list)
    

    return (

        <ScrollView>
            {list ?
                list.map((data, key) => (
                    <SeriesCart
                        image={data.images.show ? data.images.show : data.images.box}
                        title={data.title}
                        description={data.description.substr(0, 120)}
                        id={data.id}
                        key={key}
                    />
                ))
                :
                <SeriesCart />
            }
        </ScrollView>
    )
}
export default ListScreen;
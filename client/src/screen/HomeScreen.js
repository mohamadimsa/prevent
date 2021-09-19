import React, { useEffect } from "react";
import { Text, ScrollView } from "react-native";
import { useSerie } from "../api/serie/useSerie";
import { serieList } from "../../src/redux/selectors";
import { useSelector } from 'react-redux'
import SeriesCart from '../compenent/SerieCartes'

const HomeScreen = () => {
    const list = useSelector(serieList);
    const { getAll } = useSerie();
    useEffect(() => { getAll(); }, [])

    return (
        <ScrollView>
            {list ?
                list.map((data, key) => (
                    <SeriesCart
                        image={data.images.show ? data.images.show : data.images.box}
                        title={data.title}
                        description={data.description.substr(0, 120)}
                        id={data.id}
                        button={'button'} />
                ))
                :
                <SeriesCart />
            }
        </ScrollView>
    )
}
export default HomeScreen;
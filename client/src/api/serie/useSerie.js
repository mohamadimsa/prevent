import { useDispatch } from "react-redux";
import { all_series,favorite_serie } from "./../../redux/actions/index";
import axios from "axios";
import { url, key } from "../config";
import { useSelector } from "react-redux";
import { token } from "../../redux/selectors";


export const useSerie = () => {
    const dispatch = useDispatch();
    const tok = useSelector(token);
    const header = {
        "Content-Type": "multipart/form-data"
    }
    const getAll = async () => {
        const responce = await axios.get(`${url}/shows/list?order=popularity${key}`, header)
            .then(({ data }) => {
                dispatch(all_series(data.shows));
            })
            .catch(e => {
                console.log(e);
            })
    }
    const addSerie = async (id) => {
        const responce = await axios.post(`${url}/shows/show?id=${id}&token=${tok}&${key}`)
            .then(({ data }) => {
                console.log("ok")
               
            })
            .catch(e => {
                if (e.response.data.errors !== undefined && e.response.data.errors.length > 0) {
                    console.log(e.response.data.errors[0].text);
                }
            })

    }
    const addFavorite = async ()=>{
        const responce = await axios.get(`${url}/shows/member?id=${tok}&key=${key}`)
        .then(({ data }) => {
            dispatch(favorite_serie(data.shows));
            
        })
        .catch(e => {
            if (e.response.data.errors !== undefined && e.response.data.errors.length > 0) {
                console.log(e.response.data.errors[0].text);
            }
        })
    }

    return {
        getAll,
        addSerie,
        addFavorite
    }



}
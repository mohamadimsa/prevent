import { useDispatch } from "react-redux";
import { all_series } from "./../../redux/actions/index";
import axios from "axios";
import { url, key } from "../config";
/* import { useSelector } from "react-redux";
import { token } from "../../src/redux/selectors"; */


export const useSerie = () => {
    const dispatch = useDispatch();
    /* const tok = useSelector(token) */
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
  /*   const addSerie = async (id) => {
        const responce = await axios.get(`${url}/shows/show?id=${id}&${tok}`)
        
    } */

    return {
        getAll
    }



}
import { useDispatch } from "react-redux";
import { all_series } from "./../../redux/actions/index";
import axios from "axios";
import { url, key } from "../config"

export const useSerie = () => {
    const dispatch = useDispatch();

    const header = {
        "Content-Type": "multipart/form-data"
    }
    const getAll = async () => {
        const responce = await axios.get(`${url}/shows/list?order=popularity${key}`, header)
            .then(({ data }) => {
                dispatch(all_series(data));
            })
            .catch(e => {
                console.log(e);
            })
    }

    return {
        getAll
    }



}
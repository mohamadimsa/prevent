import { useDispatch } from "react-redux";
import axios from "axios";
import {connection} from "./../../redux/actions/index";
import md5 from 'md5';
export const useAuth = () => {
    const dispatch = useDispatch(); 
    const authentification = async (email, password) => {
            let formData = new FormData();
            formData.append("login", email);
            formData.append("password", md5(password));

            const header = {
                'X-BetaSeries-Key':"a81e35d58dd5",
                'X-BetaSeries-Version': 3.0,
                "Content-Type": "multipart/form-data",
            }
            const response = await axios.post('https://api.betaseries.com/members/auth?key=a81e35d58dd5', formData, header)
                .then(res => {
                    
                    const data = {
                        token: res.data.token

                    }
                    dispatch(connection(data))
                })
                .catch(e => {
                    const data = {
                         error: true,
                         message: e.response.data.errors[0].text
                    }
                    dispatch(connection(data));
                })
    }
    
    const inscription = async (username, email, password) => {
        let formData = new FormData();
        formData.append("login", username);
        formData.append("email", email);
        formData.append("password", md5(password));
        const header = {
            "Content-Type": "multipart/form-data"
        }
      const reponse = await axios.post("https://api.betaseries.com/members/signup?key=a81e35d58dd5", formData, header)
            .then((res) => {
                console.log(res.data)   
            })
            .catch(e => {
                console.log(e.response.data)
            })
    }



    return {
        authentification,
        inscription
    }
}
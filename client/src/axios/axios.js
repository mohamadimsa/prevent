import axios from "axios";
import {REACT_APP_BETASERIES_KEY,REACT_APP_BETASERIES_URL} from 'react-native-dotenv'

const header = {
     'X-BetaSeries-key': REACT_APP_BETASERIES_KEY
}
const instance = axios.create({
    baseURL : REACT_APP_BETASERIES_URL,
    headers: header
})
export default instance;
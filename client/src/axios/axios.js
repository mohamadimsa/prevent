import axios from "axios";

const header = {
     'X-BetaSeries-key': process.env.REACT_APP_BETASERIES_KEY
}
const instance = axios.create({
    baseURL : process.env.REACT_APP_BETASERIES_URL,
    headers: header
})
export default instance;
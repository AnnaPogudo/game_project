import axios from "axios"

const key = "9ee6217678e745079b904dd55e276c7c";
const axiosCreate = axios.create({
baseURL:'https://api.rawg.io/api'
})

const getGenrelList = axiosCreate.get('/genres?key='+key)
export default {
    getGenrelList
}
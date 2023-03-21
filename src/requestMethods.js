import axios from "axios";
import {useSelector} from "react-redux"
const BASE_URL = "http://localhost:3000/api"
let TOKEN;
const getToken = ()=>{
    if(localStorage.getItem("persist:root")){
        TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accestoken
}
}
getToken()

// const token2 = useSelector(state=>state.user.currentUser.accestoken)
console.log(TOKEN)
export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})
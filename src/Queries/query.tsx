import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import dotenv from "dotenv";

dotenv.config({
    path:'./config.env'
})

console.log(process.env.REACT_APP_APPLICATION_ID)

// const url = process.env.API?.replace(/app_id/gi,process.env.APP_ID).replace(/application_key/gi, process.env.APPLICATION_KEY)!;
// const fetchQuery = async() :Promise<any[]> =>{
//     return await axios.get(url)
// }
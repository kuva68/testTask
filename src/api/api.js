import axios from 'axios'
import {API_URL} from '../constants/api_config'



export const instance = axios.create({
    withCredentials: false,
    mode: 'no-corse',
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        
    }
})


export const getHacker = {

    news: (n) => {
        return instance.get(`news/${n}.json`)
            .then(response => response.data)
              .catch(error=>console.log(error))
    },

    newest: (n) => {
       
            return instance.get(`newest/${n}.json`)
            .then(response => response.data)
            .catch(error=>console.log(error))
    }
        
    }


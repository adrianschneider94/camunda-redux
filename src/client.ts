import {default as axios_} from 'axios'

export const axios = axios_.create({
    baseURL: 'http://192.168.0.81:8080/engine-rest'
})

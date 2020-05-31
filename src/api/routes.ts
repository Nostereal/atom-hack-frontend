import axios from 'axios'
import config from '../config'

const request = axios.create({
    baseURL: config.api.url,
    timeout: 10000,
})

export const fetchSWPerson = async (id: number) => 
    request
        .get(`/people/${id}`)
        .then((data) => console.log(data))

export const addToFavorites = async (id: string) =>
    request
        .post(`/favorites/${id}`)
        .then<number>(({ status} ) => status)
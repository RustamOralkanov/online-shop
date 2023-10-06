import axios from 'axios'

export const newInstance = axios.create({
  baseURL: 'https://dummyjson.com'
})

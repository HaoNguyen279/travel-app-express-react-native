import {api} from '../services/api'

export const getAllPlaces = () =>{
    return api.get('/places/getAllPlaces');
}
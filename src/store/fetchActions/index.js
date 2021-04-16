import api from '../../services/ap';
import { addDogs } from '../ducks/dogs'

export const getAllDogs = () => {
    return (dispatch) => {
        api
            .get('').then((response) => {
                //console.log(response.data)
            dispatch(addDogs(response.data))
        })
        .catch(console.log)
    }
} 
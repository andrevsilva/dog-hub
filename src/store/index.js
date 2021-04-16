import { configureStore } from '@reduxjs/toolkit'

import dogsreducer from './ducks/dogs'
import adoptionReducer from './ducks/dogs/adoption'


export default configureStore({
    reducer: {
        dogs: dogsreducer,
        adoption : adoptionReducer
    }
})

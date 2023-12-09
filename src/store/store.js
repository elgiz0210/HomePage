import {configureStore} from '@reduxjs/toolkit'
import {heroesSlice} from '../featurse/hero/heroesSlice'

export const store = configureStore({
    reducer:{
        heroes: heroesSlice.reducer,
},
})
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    heroes: []
}


export const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        addHeroes: (state , action) => {
            state.heroes = action.payload
        }
    }
})

export const {addHeroes} = heroesSlice.actions
export default heroesSlice.reducer
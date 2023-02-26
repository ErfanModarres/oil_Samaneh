import { createSlice } from '@reduxjs/toolkit'



export const mainPageSlice = createSlice({

    name: 'carInfo',
    initialState: {
        value: [],
    },
    reducers: {
        getCarList: (state, action) => {
            const value = [...state.value]
            console.log(`car Info ${JSON.stringify(state.value)}`)
            console.log(` payLoad ${JSON.stringify(action.payload)}`)
            state.value=action.payload;
        },


    },
})

// Action creators are generated for each case reducer function
export const { getCarList } = mainPageSlice.actions

export default mainPageSlice.reducer




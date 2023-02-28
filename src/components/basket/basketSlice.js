import { createSlice } from '@reduxjs/toolkit'



export const basketSlice = createSlice({

    name: 'basketOrder',
    initialState: {
        totalOrderLiter: 0,
        value: [],
    },
    reducers: {
        // totalOrderLiter: (state, action) => {
        //     // const value = [...state]
        //     const filterValue = value.findIndex((value) => value.vCustomerCarId == action.payload);
        //     const value = action.payload.map(v => ({...v, totalOrderLiter : state.value[filterValue].totalOrderLiter + state.value[filterValue].iLiter}))
        //     // state.totalOrderLiter = state.value[filterValue].totalOrderLiter + state.value[filterValue].iLiter
        //     console.log(`Order info ${JSON.stringify(state.totalOrderLiter)}`)
        //     // console.log(`car info change car totalQuota ${JSON.stringify(state.totalQuota)}`)
        //     // console.log(`car info change car isActive ${JSON.stringify(state.value)}`)
        // }


    },
})

// Action creators are generated for each case reducer function
export const { totalOrderLiter } = basketSlice.actions

export default basketSlice.reducer




import { createSlice } from '@reduxjs/toolkit'



export const mainPageSlice = createSlice({

    name: 'carInfo',
    initialState: {
        totalQuota:0,
        value: [],
    },
    reducers: {
        getCarList: (state, action) => {
            const value = action.payload.map(v => ({...v, isActive: false}))
            state.value=value;
            // console.log(`car info ${JSON.stringify(state.value)}`)
        },

        change_checked_car:(state,action) =>{
            const value=[...state.value]
            const filterValue= value.findIndex((value) => value.vCustomerCarId== action.payload);        
            if (filterValue!=-1){
                state.value[filterValue].isActive=!state.value[filterValue].isActive
                if (state.value[filterValue].isActive==true){
                    state.totalQuota+=state.value[filterValue].iLiter
                }else{
                    state.totalQuota-=state.value[filterValue].iLiter
                }
            }
            // console.log(`car info change car totalQuota ${JSON.stringify(state.totalQuota)}`)
            // console.log(`car info change car isActive ${JSON.stringify(state.value)}`)
        }


    },
})

// Action creators are generated for each case reducer function
export const { getCarList , change_checked_car } = mainPageSlice.actions

export default mainPageSlice.reducer




import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({

    name: 'basketCounter',
    initialState: {
        price: 0, 
        productId: "",
    },
    reducers: {
        calculatePrice: (state) => {
            state.value +=1;
          
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { calculatePrice } = counterSlice.actions

export default counterSlice.reducer




import { Filter } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({

    name: 'basketCounter',
    initialState: {
        count: 0,
        totalPrice:0,
        value: [],
    },
    reducers: {
        addToCard: (state, action) => {
            const value = [...state.value]
            const filterValue= value.findIndex((value) => value.Id == action.payload.Id);
            if (filterValue==-1){
                action.payload.count=1;
                state.value.push(action.payload);
            }

        },
        removeFromCard: (state, action) => {
            const value = [...state.value];
            const payload = action.payload;
            state.value=[]
            state.value= value.filter((value) => value.Id != payload);

        },
        inc_count:(state,action)=>{
            const value = [...state.value];
            const filterValue= value.findIndex((value) => value.Id == action.payload);
            if (filterValue!=-1){
                state.value[filterValue].count+=1;

            }
            
        },
        dec_count:(state,action)=>{
            const value = [...state.value];
            const filterValue= value.findIndex((value) => value.Id == action.payload);
            if (filterValue!=-1){
                state.value[filterValue].count-=1;
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCard, removeFromCard ,inc_count,dec_count } = counterSlice.actions

export default counterSlice.reducer




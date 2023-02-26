import { Filter } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit'

//
function calc_total_price(basketList){
    var sum=0;
    basketList.forEach(element => {
        sum+=(element.count * element.Price)
    });
    return sum;
}

function add_permission_quota(basketList,quota){
    let sum=0;
    basketList.forEach(element => {
        sum+=(element.iLiter)
    });
    var ret=false;
    (sum>quota ? ret=false: ret=true)
    console.log(`quota permission ${ret} , sum ${sum} , quota ${quota}`)
    return ret;
}

export const counterSlice = createSlice({

    name: 'basketCounter',
    initialState: {
        quota:4,
        count: 0,
        totalPrice:0,
        value: [],
    },
    reducers: {
        addToCard: (state, action) => {
            const value = [...state.value]
            const filterValue= value.findIndex((value) => value.Id == action.payload.Id);
            if (filterValue==-1){
                if (add_permission_quota(state.value,state.quota)==true) 
                {
                    state.value.push(action.payload);
                    action.payload.count=1;
                }
                
               
            }
            state.totalPrice=calc_total_price(state.value);
            console.log(`backet value ${state.value}`)

        },
        removeFromCard: (state, action) => {
            const value = [...state.value];
            const payload = action.payload;
            state.value=[]
            state.value= value.filter((value) => value.Id != payload);
            state.totalPrice=calc_total_price(state.value);

        },
        inc_count:(state,action)=>{
            const value = [...state.value];
            const filterValue= value.findIndex((value) => value.Id == action.payload);
            if (filterValue!=-1){
                if (add_permission_quota(state.value,state.quota)==true) state.value[filterValue].count+=1;

            }
            state.totalPrice=calc_total_price(state.value);
            
        },
        dec_count:(state,action)=>{
            const value = [...state.value];
            const filterValue= value.findIndex((value) => value.Id == action.payload);
            if (filterValue!=-1){
                state.value[filterValue].count-=1;
            }
            state.totalPrice=calc_total_price(state.value);
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCard, removeFromCard ,inc_count,dec_count } = counterSlice.actions

export default counterSlice.reducer




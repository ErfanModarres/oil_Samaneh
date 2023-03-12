import { createSlice } from '@reduxjs/toolkit'
import { wait } from '@testing-library/user-event/dist/utils';
import {accessTotalQuota} from '../mainPage/mainPageSlice'
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
    // console.log(`Basket${JSON.stringify(basketList)}`);
    basketList.forEach(element => {
        sum+=(element.liter * (element.count+1));
        // console.log(`sum is ${sum}`);
    });
    var ret=false;
    (sum>quota ? ret=false: ret=true)
    return ret;
}


export const counterSlice = createSlice({

    name: 'basketCounter',
    initialState: {
        quota:0,
        count: 0,
        totalPrice:0,
        value: [],
    },
    reducers: {
        addToCard: (state, action) => {
            const value = [...state.value]
            const filterValue= value.findIndex((value) => value.Id == action.payload.Id);
            if (filterValue==-1){
                var payload
                if(value.length == 0){
                 payload = [action.payload]
                payload[0].count = 0
                }else{
                     payload = state.value
                }
                if (add_permission_quota(payload,state.quota)==true) 
                {
                    state.value.push(action.payload);
                    action.payload.count=1;
                }
                
               
            }
            state.totalPrice=calc_total_price(state.value);
            // console.log(`backet value ${state.value}`)

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
                
                if (state.value[filterValue].count-1!=0){state.value[filterValue].count-=1;}

            }
            state.totalPrice=calc_total_price(state.value);
        },
        setQuota:(state,action)=>{
            console.log(`action.payload ${action.payload}`);
            state.quota= action.payload;
            console.log(JSON.stringify(state));
        }

    },
})

// Action creators are generated for each case reducer function
export const { addToCard, removeFromCard ,inc_count,dec_count,setQuota } = counterSlice.actions

export default counterSlice.reducer




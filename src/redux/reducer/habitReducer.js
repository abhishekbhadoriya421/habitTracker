import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    habits: [
        {
            habit:"Studying",
            time:new Date().toLocaleString(),
            day1:"Done",
            day2:"NotDone",
            day3:"",
            day4:"Done",
            day5:"NotDone",
            day6:"",
            day7:""
        },
        {
            habit:"Playing",
            time:new Date().toLocaleString(),
            day1:"Done",
            day2:"Done",
            day3:"",
            day4:" NotDone",
            day5:"NotDone",
            day6:"Done",
            day7:""
        }
    ]
}

const habitSlice = createSlice({
    name:"Habits",
    initialState: initialState,
    reducers:{
        add:(state,action)=>{
            state.habits.unshift(action.payload);
        },
        delete:(state,action)=>{
            state.habits.splice(action.payload,1);
        },
        update:(state,action)=>{
            const {ind,status,day} = action.payload;
            state.habits[ind][`day${day}`] = status;
        }
    }

})

export const habitReducer = habitSlice.reducer;
export const actions = habitSlice.actions;

// Selector
export const habitSelector = (state) => state.habitReducer.habits;
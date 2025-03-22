import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState:initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    IncrementBy(state, action) {
      state.counter = state.counter + action.payload;
    },
    DecrementBy(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState={
    isAuthenticated:false,
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})



const store = configureStore({
  //reducer:{conter:counterSlice.reducer}//map of reducers can combine many reducer
  reducer: {counter:counterSlice.reducer,auth:authSlice.reducer},
});



export const counterActions = counterSlice.actions;
export const authActions=authSlice.actions;
export default store;

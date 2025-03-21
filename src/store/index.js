import {createStore} from 'redux'

const counterReducer=(state={counter:0},action)=>{
    if(action.type==='increment'){
        return {counter:state.counter +1}
    }
    if(action.type==='decrement'){
        return {counter:state.counter -1}
    }
    if(action.type==='IncrementBy'){
        return {counter:state.counter + action.amount}
    }
    if(action.type==='DecrementBy5'){
        return {counter:state.counter - action.amount}
    }

    return state;
};


const store=createStore(counterReducer);


export default store;
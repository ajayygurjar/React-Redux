import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/index';


import classes from './Counter.module.css';

const Counter = () => {

  const dispatch=useDispatch();

 const counter = useSelector(state=>state.counter)
 const show=useSelector(state=>state.showCounter)
 const incrementHandler=()=>{
  dispatch(counterActions.increment())
 };
 const decrementHandler=()=>{
  dispatch(counterActions.decrement)
 };
 const incrementBy5=()=>{
  dispatch(counterActions.IncrementBy(5)) //{ type:SOME_UNIQUE_IDENTIFIER,payload:5}
 };
 
 const decrementBy5=()=>{
  dispatch(counterActions.DecrementBy(5) )
 };



  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle)
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementBy5}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

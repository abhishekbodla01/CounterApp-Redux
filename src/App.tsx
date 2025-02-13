import { useDispatch, useSelector} from 'react-redux'
import './App.css'
import { decrement, increment,reset,incrementByAmount} from './redux/slices/counter';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state: { counter: { value: number } }) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  } 
  function handleReset() {
    dispatch(reset());
  }
  function incrementby() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className='container'>
      <div style={{ fontSize: "4rem", fontWeight: "bold" }}>{count}</div>
      <br/>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <br/>
      <button onClick={handleReset}>Reset</button>
      <br/>
      <input 
        type="number" 
        value={amount} 
        onChange={(event) => setAmount(Number(event.target.value))} 
        placeholder="Enter a number to increment by"
        className="input-box"
      />
      <button onClick={incrementby}>Increment by amount</button>
    </div>
  )
}

export default App

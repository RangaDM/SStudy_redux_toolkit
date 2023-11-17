import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addComputer, decrement, increment } from "./store/reducers/numberSlice";

function App() {
  const number = useSelector((store) => store.numberSlice);
  console.log(number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{number.number}</h1>

      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement(1));
        }}
      >
        Decrement
      </button><br/>
      <h1>{number.computers}</h1>
      <button onClick={()=>{dispatch(addComputer(2))}}>addComputer</button>
    </div>
  );
}

export default App;

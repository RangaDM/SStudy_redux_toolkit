import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, numberSliceSelector } from "./store/reducers/numberSlice";
import { decrement2, increment2 } from "./store/reducers/number2Slice";
import LapTopComponent from "./components/LapTopComponent";

function App() {
  const number = useSelector(numberSliceSelector); // export const numberSliceSelector = (store) => store.numberSlice;
  const number2 = useSelector((store) => store.number2Slice.number); // directly access the state

  // console.log(number);

  const dispatch = useDispatch();
  return (
    <div style={{marginLeft:"20px"}}>
      <h1>{number.number}</h1>

      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement(3));
        }}
      >
        Decrement
      </button>
      <br />
      {/* <h1>{number.computers}</h1>
      <button onClick={()=>{dispatch(addComputer(2))}}>addComputer</button> */}
      <h2>{number2}</h2>
      <button
        onClick={() => {
          dispatch(increment2(5));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement2(1));
        }}
      >
        Decrement
      </button>
      <br />
      <div>
        <LapTopComponent />
      </div>
    </div>
  );
}

export default App;

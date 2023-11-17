import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./store/reducers/numberSlice";

function App() {
  const number = useSelector((store) => store.numberSlice.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{number}</h1>

      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(increment(1));
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;

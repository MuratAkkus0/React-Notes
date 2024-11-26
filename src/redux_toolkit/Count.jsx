import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Count() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="count">{value}</div>
      <div className="controls">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}

export default Count;

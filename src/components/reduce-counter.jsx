import { useReducer } from "react";

// 需要先初始化
const handleCountReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
export function ReduceCounter() {
  const [count2, dispatch] = useReducer(handleCountReducer, 0);

  const handleAddCount = () => {
    dispatch({ type: "increment" });
  };

  const handleDecreaseCount = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={handleAddCount}>增加</button>
      <button onClick={handleDecreaseCount}>减少</button>
      <div>{count2}</div>
    </div>
  );
}

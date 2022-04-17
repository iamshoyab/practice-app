import React, { useReducer } from "react";
const initialState = { count: 0, name: "" };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increament":
      return { ...state, count: state.count + action.payload };
    case "Decreament":
      return { ...state, count: state.count - action.payload };
    case "Name":
      return { ...state, name: action.payload };
    default:
      return { ...state, count: 0, name: "" };
  }
};
export const Reducer = () => {
  const [value, dispatch] = useReducer(reducer, initialState);
  //   console.log("Value", value);
  //   console.log("Dispatch", dispatch);
  return (
    <div>
      <h4>Reducer</h4>
      <h1>{value.count}</h1>
      <h1>{value.name}</h1>
      <div className="contained">
        <button onClick={() => dispatch({ type: "Increament", payload: 5 })}>
          Increament
        </button>
        <br />
        <button onClick={() => dispatch({ type: "Decreament", payload: 5 })}>
          Decreament
        </button>
        <br />

        <button onClick={() => dispatch({ type: "Name", payload: "Ammar" })}>
          Name Change
        </button>
        <br />

        <button onClick={() => dispatch("Reset")}>Reset</button>
      </div>
    </div>
  );
};

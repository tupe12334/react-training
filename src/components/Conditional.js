import React from "react";

export default function Conditional(props) {
  console.log(props.isLoading);
  return (
    <div>{props.isLoading ? <h1>loding</h1> : <h1>work</h1>}</div>
  );
}

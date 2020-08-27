import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function Newcake(props) {
  const [num, setNum] = useState(1);
  return (
    <div>
      <h2>Number Of cakes - {props.numOfCakes}</h2>
      <input type="text" value={num} onChange={(e) => setNum(e.value)} />
      <button onClick={() => props.buyCake(num)}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (num) => dispatch(buyCake(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Newcake);

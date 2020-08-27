import React from 'react';
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

function iceContainer(props) {
  return (
    <div>
      <h2>Number Of ice cream - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.ice.numOfIce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(iceContainer);

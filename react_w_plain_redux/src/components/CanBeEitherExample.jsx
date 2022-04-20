import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemExample(props) {
  console.log(props.isCake);
  return (
    <div>
      <h2>
        Number of items ({props.isCake ? 'cake' : 'ice cream'}): {props.numOfItems}
      </h2>
      <button onClick={props.buyItem}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.isCake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    numOfItems: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const buyItem = ownProps.isCake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: buyItem,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemExample);

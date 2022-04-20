import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamExample(props) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h2>Number of ice creams: {props.numOfIceCreams}</h2>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
      <button onClick={() => props.buyIceCream(count)}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (count) => dispatch(buyIceCream(count)),
  };
};

// export default IceCreamExample;
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamExample);

import React from 'react';
import { Provider } from 'react-redux';
import CakeExample from './components/CakeExample';
import HooksCakeExample from './components/HooksCakeExample';
import store from './redux/store';

export default () => (
  <Provider store={store}>
    <div>
      <CakeExample />
      <HooksCakeExample />
    </div>
  </Provider>
);

/*
  summary:
  - create store + reducer in ./redux
  - make <Provider store={store}> as topmost
  - in the components, to have access to state and actions, do one of the following:
    - create mapStatetoProps and mapDispatchToProps and connect it to the component. component will receive both info as props
    - with the hook thing. useSelector and useDispatch.   -> easier, i must say
*/

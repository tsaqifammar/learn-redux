import React from 'react';
import { Provider } from 'react-redux';
import CakeExample from './components/CakeExample';
import CanBeEitherExample from './components/CanBeEitherExample';
import HooksCakeExample from './components/HooksCakeExample';
import IceCreamExample from './components/IceCreamExample';
import UserExample from './components/UserExample';
import store from './redux/store';

export default () => (
  <Provider store={store}>
    <div>
      <CakeExample />
      <HooksCakeExample />
      <IceCreamExample />
      <CanBeEitherExample isCake={true} />
      <CanBeEitherExample isCake={false} />
      <UserExample />
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

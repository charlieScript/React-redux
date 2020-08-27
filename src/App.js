import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/store";
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceContainer from './components/IceContainer';
import Newcake from './components/Newcake'
import Item from './components/Item';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Item cake />
        <Item />
        <HooksCakeContainer />
        <CakeContainer />
        <IceContainer />
        <Newcake />
      </div>
    </Provider>
  );
}

export default App;

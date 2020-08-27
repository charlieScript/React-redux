import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/store";
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceContainer from './components/IceContainer';
import Newcake from './components/Newcake'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceContainer />
        <Newcake />
      </div>
    </Provider>
  );
}

export default App;

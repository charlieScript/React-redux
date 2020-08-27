import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/store";
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceContainer from './components/IceContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceContainer />
      </div>
    </Provider>
  );
}

export default App;

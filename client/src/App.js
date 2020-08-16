import React, {useEffect} from 'react';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

import {Provider} from 'react-redux';
import store from './store';
import {loadStudent} from './actions/authActions' 
import './App.css';

const App = () => {
  
  useEffect(() => {
    store.dispatch(loadStudent());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
      <Navbar />
      <Dashboard />
    </div>
    </Provider>
    
  );
}

export default App;

import React from 'react';
import { Text, View } from 'react-native';
import Login from './src/Router/Router'
import Router from './src/Router/Router';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/Reducers'

const App = () => {
  const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
  return(
    <Provider store={store}>
   <Router/>
   </Provider>
);}

export default App;

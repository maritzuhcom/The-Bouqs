import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { render } from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadState, saveState } from './utilities/localStorageUtil';

import rootReducer from './store';

import Home from './home';
import Cart from './cart';
import Flower from './flower';
import Header from './components/Header';

import { getCategories } from './actions/categories';

import '../style/index.scss';
import 'antd/dist/antd.css';

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const store = createStore(rootReducer, loadState(), composedEnhancers);

store.subscribe(() => {
  saveState(store.getState());
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/flowers/:flowerType">
          <Flower />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'),
);

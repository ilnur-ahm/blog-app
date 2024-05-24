import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { rootReducer } from './redux/rootReduser';
import { Provider } from 'react-redux';
import { postData } from './redux/postData';
import Counters from './Counters';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App postData={postData} />
      <Counters postData={postData} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

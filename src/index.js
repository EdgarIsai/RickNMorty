import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import reducers from './reducers';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

const store = createStore(
  reducers, // All reducers combined
  {}, // Initial state
  applyMiddleware(reduxThunk),
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

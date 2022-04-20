import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';


ReactDOM.render(
  <Provider store={store}>

    <PersistGate loading={null} persistor={persistor}>

      <App />

    </PersistGate>

  </Provider>,
  document.getElementById('root')
);


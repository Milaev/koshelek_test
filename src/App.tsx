import React from 'react';
import './App.css';
import store from './store/store';
import CurrencyConverter from './components/currency-converter/CurrencyConverter';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <CurrencyConverter />
    </Provider>
  );
}

export default App;

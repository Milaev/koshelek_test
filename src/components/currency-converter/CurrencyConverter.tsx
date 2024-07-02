import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch, setUsd, setEur } from '../../store/store';
import './CurrencyConverter.css';

const CurrencyConverter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { usd, eur } = useSelector((state: RootState) => state.currency);

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || !isNaN(parseFloat(value))) {
      dispatch(setUsd(value));
    }
  };

  const handleEurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || !isNaN(parseFloat(value))) {
      dispatch(setEur(value));
    }
  };

  return (
    <div className="currency-converter">
      <div className="currency-input">
        <label htmlFor="usd">USD</label>
        <input
          type="text"
          id="usd"
          value={usd}
          onChange={handleUsdChange}
          inputMode="decimal"
        />
      </div>
      <div className="currency-input">
        <label htmlFor="eur">EUR</label>
        <input
          type="text"
          id="eur"
          value={eur}
          onChange={handleEurChange}
          inputMode="decimal"
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const EXCHANGE_RATE = 1.07;

interface CurrencyState {
  usd: number | string;
  eur: number | string;
}

const initialState: CurrencyState = {
  usd: '',
  eur: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setUsd: (state, action: PayloadAction<number | string>) => {
      const value = action.payload === '' ? '' : parseFloat(action.payload as string);
      const eur = value === '' ? '' : value / EXCHANGE_RATE;
      state.usd = value;
      state.eur = eur;
    },
    setEur: (state, action: PayloadAction<number | string>) => {
      const value = action.payload === '' ? '' : parseFloat(action.payload as string);
      const usd = value === '' ? '' : value * EXCHANGE_RATE;
      state.eur = value;
      state.usd = usd;
    },
  },
});

export const { setUsd, setEur } = currencySlice.actions;

const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

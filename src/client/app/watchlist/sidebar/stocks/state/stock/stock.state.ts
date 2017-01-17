import { Map, Record } from 'immutable';

export interface StockStateInterface extends Map<string,any> {
  symbol?:string;
  data?:string;
}

export const StockInitialState = Record({
  symbol: 'AAPL',
  data: {}
});

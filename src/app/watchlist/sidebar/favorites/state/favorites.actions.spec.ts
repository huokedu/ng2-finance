import { FavoritesActions } from './index';
import { ErrorInterface } from '../../../../core/state/api.state';
import { StockDataInterface } from '../../../state/watchlist.state';

describe('FavoritesActions', () => {
  let actions: FavoritesActions;

  beforeEach(() => {
    actions = new FavoritesActions();
  });

  it('should create an action when changeOrder() is called', () => {
    let order:string[] = ['symbol'];
    expect(actions.changeOrder(order))
      .toEqual({
        type: FavoritesActions.CHANGE_ORDER,
        payload: order
      });
  });

  it('should create an action when sortData() is called', () => {
    expect(actions.sortData())
      .toEqual({
        type: FavoritesActions.SORT_DATA,
        payload: null
      });
  });

  it('should create an action when fetchFulfilled() is called', () => {
    let data:StockDataInterface[] = [{
      symbol: 'symbol'
    }];
    expect(actions.fetchFulfilled(data))
      .toEqual({
        type: FavoritesActions.FETCH_FULFILLED,
        payload: data
      });
  });

  it('should create an action when fetchLoader() is called', () => {
    let loader:boolean = true;
    expect(actions.fetchLoader(loader))
      .toEqual({
        type: FavoritesActions.FETCH_LOADER,
        payload: loader
      });
  });

  it('should create an action when fetchError() is called', () => {
    let error:ErrorInterface = {
      value: 'error'
    };
    expect(actions.fetchError(error))
      .toEqual({
        type: FavoritesActions.FETCH_ERROR,
        payload: error
      });
  });
});

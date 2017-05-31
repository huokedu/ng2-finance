import { Record } from 'immutable';
import { AppInitialState } from './index';

describe('AppInitialState', () => {
  let state:any;

  beforeEach(() => {
    state = new AppInitialState();
  });

  it('should be an instance of Immutable.Record', () => {
    expect(state instanceof Record).toBe(true);
  });

  it('should contain default properties', () => {
    expect(state.preloader).toBe(true);
  });
});

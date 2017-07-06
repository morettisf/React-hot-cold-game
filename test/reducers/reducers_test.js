import { expect } from 'chai';
import initialState from '../../src/reducers/index';
import reducer from '../../src/reducers/index';


describe('reducers', () => {  
  it('initialState should be available', () => {
    expect(initialState).to.exist;
  });
});
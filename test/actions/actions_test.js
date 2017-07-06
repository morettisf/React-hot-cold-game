import { expect } from 'chai';
import * as actions from '../../src/actions/index';

describe('actions', () => {  
  it('guess number should be available', () => {
    expect(actions.guessNumber()).to.exist;
  });

  it('new game should be available', () => {
    expect(actions.newGame()).to.exist;
  });

  it('get fewest guesses should be available', () => {
    expect(actions.guessNum()).to.exist;
  });    
});
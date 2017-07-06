import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon, { spy } from 'sinon';

import { FewestGuesses } from '../../src/components/fewest-guesses';

describe('<FewestGuesses />', () => {
  it('should call fewest once', () => {
    sinon.spy(FewestGuesses.prototype, 'fewest');
    const wrapper = shallow(<FewestGuesses />);
    expect(FewestGuesses.prototype.fewest.calledOnce).to.equal(true);
  });
});
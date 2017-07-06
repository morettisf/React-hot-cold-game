import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon, { spy } from 'sinon';

import { FireAndIce } from '../../src/components/fire-ice';

describe('<FireAndIce />', () => {
  it('should call componentWillMount once', () => {
    sinon.spy(FireAndIce.prototype, 'componentWillMount');
    const wrapper = shallow(<FireAndIce />);
    expect(FireAndIce.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('should have a default fire className as empty string', () => {
    const wrapper = shallow(<FireAndIce />);
    expect(wrapper.find('#fire-wrapper').hasClass('')).to.equal(true);
  })

  it('should have a default ice className as empty string', () => {
    const wrapper = shallow(<FireAndIce />);
    expect(wrapper.find('#ice-wrapper').hasClass('')).to.equal(true);
  })

});
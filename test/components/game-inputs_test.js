import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon, { spy } from 'sinon';

import { GameInput } from '../../src/components/game-inputs';

describe('<GameInput />', () => {
  it('should have the name GameInput', () => {
    const TestComponent = () => <GameInput />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('GameInput');
  });

  it('should contain a form', () => {
    const wrapper = shallow(<GameInput />);
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('should have a button', () => {
    const wrapper = shallow(<GameInput />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should recognize a click of the button, and scroll to top', () => {
    const handleClickSpy = sinon.spy(GameInput.prototype, 'scrollToTop');
    const wrapper = mount(<GameInput />);
    wrapper.find('button').simulate('click');
    expect(handleClickSpy.calledOnce).to.equal(true);
  });

})
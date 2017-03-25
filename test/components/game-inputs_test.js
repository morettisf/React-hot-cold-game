import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import { GameInput } from '../../src/components/game-inputs';

describe('<GameInput />', function () {
  it('should have the name GameInput', function () {
    const TestComponent = () => <GameInput />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('GameInput');
  });
})
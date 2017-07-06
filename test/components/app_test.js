import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import { App } from '../../src/components/app';

describe('<App />', function() {
  it('should have a default className as empty string', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#app').hasClass('')).to.equal(true);
  })
})
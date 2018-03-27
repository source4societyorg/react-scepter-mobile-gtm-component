import React from 'react';
import { shallow } from 'enzyme';
import GTMComponent from '../src/index';

test('GTMComponent renders without problems', () => {
  const renderComponent = shallow(<GTMComponent />);
  renderComponent.render();
});

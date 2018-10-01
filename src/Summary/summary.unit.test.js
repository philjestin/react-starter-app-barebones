/* eslint-disable */

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Summary from './';

Enzyme.configure({ adapter: new Adapter() });

describe('src::Summary', () => {

  describe('rendering', () => {
    
    const component = renderer.create(
      <Summary />
    );

    test('renders properly and matches snapshot.', () => {
      let tree = component.toJSON();
      jestExpect(tree).toMatchSnapshot();
    });
  });
});

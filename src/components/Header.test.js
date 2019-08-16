import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect to render Header component', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
})

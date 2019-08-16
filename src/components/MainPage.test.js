import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
  const mockPropsTmp = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'John',
      email: 'john@gmail.com'
    },
    {
      id: 2,
      name: 'Juan',
      email: 'juan@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  }
  const wrapperTmp = shallow(<MainPage {...mockPropsTmp}/>)
  expect(wrapperTmp.instance().filterRobots()).toEqual([{
    id: 1,
    name: 'John',
    email: 'john@gmail.com'
  }])
})

it('renders a message while promise is still pending', () => {
  const mockPropsTmp = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: true
  }
  const wrapperTmp = shallow(<MainPage {...mockPropsTmp}/>)
  expect(wrapperTmp.find('h1').length).toEqual(1);
})

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


it('renders without crashing', () => {
  shallow(<App store={mockStore({})}/>);
});
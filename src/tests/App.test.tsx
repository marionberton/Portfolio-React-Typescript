import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<Root />', () => {
  it('renders the component', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});

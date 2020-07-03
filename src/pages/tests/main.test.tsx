import React from 'react';
import { mount } from 'enzyme';

import { Main } from '../main';

describe('<Main />', () => {
  it('renders the component', () => {
    const component = mount(<Main />);

    expect(component.render()).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';

describe('PropTable/Table', () => {
  describe('renders a table html node with one child element', () => {
    const wrapper = shallow(
      <Table>
        <div>foo bar</div>
      </Table>
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('renders a table html node with multiple children elements', () => {
    const wrapper = shallow(
      <Table>
        <div>foo bar</div>
        <div>baz</div>
      </Table>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

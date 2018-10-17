import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';

describe('Header snapshot', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<Header startLogout={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    });
});

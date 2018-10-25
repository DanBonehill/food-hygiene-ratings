import React from 'react';
import {shallow} from 'enzyme';
import {DashboardPage} from '../../components/DashboardPage';

describe('DashboardPage snapshot', () => {
    const addAuthorities = jest.fn();
    const setSelectedAuthority = jest.fn();
    const setHygieneScores = jest.fn();
    const setLoading = setLoading;

    const wrapper = shallow(<DashboardPage
        addAuthorities={addAuthorities}
        setSelectedAuthority={setSelectedAuthority}
        setHygieneScores={setHygieneScores}
        setLoading={setLoading}
    />);

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });
});
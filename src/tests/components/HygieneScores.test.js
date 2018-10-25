import React from 'react';
import {shallow} from 'enzyme';
import {HygieneScores} from '../../components/HygieneScores';

describe('HygieneScoresTable snapshot', () => {
    test('should render correctly when loading false', () => {
        const selectedAuthority = "Coventry";
        const loading = false;
        const wrapper = shallow(<HygieneScores
            selectedAuthority={selectedAuthority}
            loading={loading}
        />);
        expect(wrapper).toMatchSnapshot()
    });

    test('should render correctly when loading true', () => {
        const selectedAuthority = "Coventry";
        const loading = true;
        const wrapper = shallow(<HygieneScores
            selectedAuthority={selectedAuthority}
            loading={loading}
        />);
        expect(wrapper).toMatchSnapshot()
    })
});
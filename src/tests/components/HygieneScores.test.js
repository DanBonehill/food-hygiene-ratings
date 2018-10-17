import React from 'react';
import {shallow} from 'enzyme';
import HygieneScores from '../../components/HygieneScores';

describe('HygieneScoresTable snapshot', () => {
    test('should render correctly', () => {
        const hygieneScores = ["Pass", "Pass", "Pass", 'Improvement Required'];
        const selectedAuthority = "Coventry";
        const wrapper = shallow(<HygieneScores hygieneScores={hygieneScores} selectedAuthority={selectedAuthority}/>);
        expect(wrapper).toMatchSnapshot()
    })
});
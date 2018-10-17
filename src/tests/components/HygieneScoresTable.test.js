import React from 'react';
import {shallow} from 'enzyme';
import HygieneScoresTable from '../../components/HygieneScoresTable';
import scores from '../fixtures/scores';

describe('HygieneScoresTable snapshot', () => {
    test('should render correctly', () => {
        const totalScoresCount = 25;
        console.log(scores);
        const wrapper = shallow(<HygieneScoresTable scores={scores} totalScoresCount={totalScoresCount}/>);
        expect(wrapper).toMatchSnapshot()
    })
});
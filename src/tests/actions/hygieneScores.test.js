import {setHygieneScores} from "../../actions/hygieneScores";

describe('setHygieneScores', () => {
    test('should generate action with given hygieneScores Array', () => {
        const hygieneScores = ["Pass"];
        const action = setHygieneScores(hygieneScores);
        expect(action).toEqual({
            type: 'SET_HYGIENE_SCORES',
            hygieneScores
        })
    })
});
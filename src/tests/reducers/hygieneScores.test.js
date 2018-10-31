import hygieneScoresReducer, {defaultState} from '../../reducers/hygieneScores';

describe('Initial State', () => {
    test('should setup default authorities value', () => {
        const state = hygieneScoresReducer(undefined, {type: "@@INIT"});
        expect(state).toEqual(defaultState)
    })
});

describe('SET_HYGIENE_SCORES action', () => {
    test('should set allScores and calculatedScores Array', () => {
        const hygieneScores = ['Pass', 'Pass', "Pass", "Improvement Required", "Improvement Required"];
        const state = hygieneScoresReducer(defaultState, {type: "SET_HYGIENE_SCORES", hygieneScores});
        expect(state).toEqual({
            allScores: hygieneScores,
            calculatedScores: [
                {
                    title: "Pass",
                    value: 3,
                },
                {
                    title: "Improvement Required",
                    value: 2
                },
                {
                    title: "Five",
                    value: 0
                },
                {
                    title: "Four",
                    value: 0
                },
                {
                    title: "Three",
                    value: 0
                },
                {
                    title: "Two",
                    value: 0
                },
                {
                    title: "One",
                    value: 0
                },
                {
                    title: "Zero",
                    value: 0
                },
                {
                    title: "Exempt",
                    value: 0
                }
            ]
        })
    })
});
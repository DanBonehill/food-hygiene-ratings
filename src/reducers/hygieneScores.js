const defaultState = {
    allScores: [],
    calculatedScores: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_HYGIENE_SCORES':
            const scores = action.hygieneScores;
            return {
                allScores: scores,
                calculatedScores: [
                    {
                        title: "Pass",
                        value: scores.filter((score) => score === 'Pass').length
                    },
                    {
                        title: "Improvement Required",
                        value: scores.filter((score) => score === 'Improvement Required').length
                    },
                    {
                        title: "Five",
                        value: scores.filter((score) => score === '5').length
                    },
                    {
                        title: "Four",
                        value: scores.filter((score) => score === '4').length
                    },
                    {
                        title: "Three",
                        value: scores.filter((score) => score === '3').length
                    },
                    {
                        title: "Two",
                        value: scores.filter((score) => score === '2').length
                    },
                    {
                        title: "One",
                        value: scores.filter((score) => score === '1').length
                    },
                    {
                        title: "Zero",
                        value: scores.filter((score) => score === '0').length
                    },
                    {
                        title: "Exempt",
                        value: scores.filter((score) => score === 'Exempt').length
                    }

                ]
            };
        default:
            return state
    }
}
export default (state = [], action) => {
    switch (action.type) {
        case 'SET_HYGIENE_SCORES':
            return action.hygieneScores;
        default:
            return state
    }
}
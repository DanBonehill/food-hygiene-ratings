const defaultState = {
    allAuthorities: [],
    selectedAuthority: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_AUTHORITIES":
            return {
                ...state,
                allAuthorities: [
                    ...action.authorities
                ]
            };
        case "SET_SELECTED_AUTHORITY":
            return {
                ...state,
                selectedAuthority: action.selectedAuthority
            };
        default:
            return state
    }
}
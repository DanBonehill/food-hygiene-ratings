export const defaultState = {
    allAuthorities: [],
    selectedAuthority: '',
    loading: false
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
        case "SET_LOADING":
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state
    }
}
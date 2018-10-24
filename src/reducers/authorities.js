export default (state = [], action) => {
    switch (action.type) {
        case "ADD_AUTHORITIES":
            return [
                ...action.authorities
                ];
        default:
            return state
    }
}
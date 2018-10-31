import {
    addAuthorities,
    setLoading,
    setSelectedAuthority
} from "../../actions/authorities";

describe('addAuthorities', () => {
    test('should generate action with given authorities Array', () => {
        const authorities = [{value: "test", label: "Test"}];
        const action = addAuthorities(authorities);
        expect(action).toEqual({
            type: 'ADD_AUTHORITIES',
            authorities
        })
    })
});

describe('setLoading', () => {
    test('should generate action with given Boolean', () => {
        const loading = true;
        const action = setLoading(loading);
        expect(action).toEqual({
            type: 'SET_LOADING',
            loading
        })
    })
});

describe('setSelectedAuthority', () => {
    test('should generate action with given String', () => {
        const selectedAuthority = "Test";
        const action = setSelectedAuthority(selectedAuthority);
        expect(action).toEqual({
            type: 'SET_SELECTED_AUTHORITY',
            selectedAuthority
        })
    })
});
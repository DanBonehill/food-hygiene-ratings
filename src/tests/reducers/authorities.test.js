import authoritiesReducer, {defaultState} from '../../reducers/authorities';
import authorities from '../fixtures/authorities';

describe('Initial State', () => {
    test('should setup default authorities value', () => {
        const state = authoritiesReducer(undefined, {type: "@@INIT"});
        expect(state).toEqual(defaultState)
    })
});

describe('ADD_AUTHORITIES action', () => {
    test('should add to the allAuthorities Array when empty', () => {
        const state = authoritiesReducer(defaultState, {type: "ADD_AUTHORITIES", authorities});
        expect(state).toEqual({
            ...defaultState,
            allAuthorities: authorities
        })
    });

    test('should overwrite the allAuthorities Array when not empty', () => {
        const prevState = {
            ...defaultState,
            allAuthorities: [
                {
                    value: 'warrington',
                    label: 'Warrington'
                }
            ]
        };
        const state = authoritiesReducer(prevState, {type: "ADD_AUTHORITIES", authorities});
        expect(state).toEqual({
            ...defaultState,
            allAuthorities: authorities
        })
    })
});

describe('SET_SELECTED_AUTHORITY action', () => {
    test('should set the selectedAuthority String', () => {
        const selectedAuthority = 'Aberdeen';
        const state = authoritiesReducer(defaultState, {type: "SET_SELECTED_AUTHORITY", selectedAuthority});
        expect(state).toEqual({
            ...defaultState,
            selectedAuthority
        })
    })
});

describe('SET_LOADING action', () => {
    test('should set loading Boolean', () => {
        const state = authoritiesReducer(defaultState, {type: "SET_LOADING", loading: true});
        expect(state).toEqual({
            ...defaultState,
            loading: true
        })
    })
});
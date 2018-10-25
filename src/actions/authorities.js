export const addAuthorities = (authorities) => ({
    type: 'ADD_AUTHORITIES',
    authorities
});

export const setSelectedAuthority = (selectedAuthority) => ({
    type: "SET_SELECTED_AUTHORITY",
    selectedAuthority
});

export const setLoading = (loading) => ({
    type: "SET_LOADING",
    loading
});
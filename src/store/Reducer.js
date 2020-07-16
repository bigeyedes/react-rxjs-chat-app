const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LINK':
			localStorage.setItem('link', action.payload)
            return {
                ...state,
                link: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;
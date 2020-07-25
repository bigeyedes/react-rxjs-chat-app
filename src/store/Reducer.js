const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LINK':
			localStorage.setItem('link', action.payload.link)
            return {
				...state,
				name: action.payload.name,
				link: action.payload.link
            };
        default:
            return state;
    }
};

export default Reducer;
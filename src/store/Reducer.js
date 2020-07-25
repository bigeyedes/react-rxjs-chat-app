import firebase from 'firebase/app'
import 'firebase/firestore'

const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ROOM':
			if(action.payload.name.length > 0){
				const db = firebase.firestore()
				db.collection("rooms").doc(`${action.payload.name}_${action.payload.link}`).set({
					name: action.payload.name,
					link: action.payload.link
				})
			}
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
import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

require('dotenv').config()

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AYTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSANGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(config);


export default firebase
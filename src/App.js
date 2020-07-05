import React, {useState} from 'react';
import './App.css';

import { Observable, Subject } from 'rxjs';

function App() {
	const [message, setMessage] = useState([])
	const messageContent = React.createRef()
	const displayMessages = {
		text: [],
		count: 0
	}

	const subject = new Subject();

	// FIRST SUBSCRIBTION
	subject.subscribe({
		next: (v) => displayMessages.text.push(v)
	});

	// SECOND SUBSCRIBTION
	subject.subscribe({
		next: (v) => displayMessages.text.push(v)
	});

	subject.next(message);

	const submitHandler = e => {
		e.preventDefault();
		setMessage(searches => searches.concat(messageContent.current.value))
	}

	return (
		<div className="App">
		<header className="App-header">
			{displayMessages.text.map((message, i) => {
				return <li key={i}>{message}</li>
			})}
			<form onSubmit={submitHandler}>
				<textarea ref={messageContent}></textarea>
				<button type="submit">Send</button>
			</form>
		</header>
		</div>
	);
}

export default App;

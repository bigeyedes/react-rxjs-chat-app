import React, {useState, useRef} from 'react';
import styled from 'styled-components'

import { Observable, Subject } from 'rxjs';

import Header from './components/ChatInterface/Header'
import Messages from './components/Messages/Messages';
import Textarea from './components/Message/Textarea'
import Button from './components/Message/Button'

function App() {

	const ChatContainer = styled.div`
		height: 90vh;
		width: 100%;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		font-family: 'Nunito', sans-serif;
	`

	const Form = styled.form`
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		box-sizing: border-box;
	`

	const [message, setMessage] = useState([])

	const messageContent = useRef()

	let displayMessages = []

	const observable = new Observable(subscriber  => {
		subscriber.next(message);
	});

	const observer  = {
		next: m => {
			displayMessages.push(...m)
		}
	}

	observable.subscribe(observer)

	const submitHandler = e => {
		e.preventDefault();
		let date = new Date();
		setMessage(searches => searches.concat({
			content: messageContent.current.value,
			time: `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()} `
		}))
	}

	return (
		<div className="App">
			<ChatContainer>
				<Header />
				<Messages messages={displayMessages}/>
				<Form onSubmit={submitHandler}>
					<Textarea messageContent={messageContent}></Textarea>
					<Button />
				</Form>
			</ChatContainer>
		</div>
	);
}

export default App;

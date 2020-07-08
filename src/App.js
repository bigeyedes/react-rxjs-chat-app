import React, {useState, useRef} from 'react';
import styled from 'styled-components'

import { Observable, Subject } from 'rxjs';

import Messages from './components/Messages/Messages';
import Textarea from './components/Message/Textarea'
import Button from './components/Message/Button'

function App() {

	const ChatContainer = styled.div`
		height: 100vh;
		width: 100%;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	`

	const Form = styled.form`
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		box-sizing: border-box;
	`

	const [message, setMessage] = useState([])
	const [time, setTime] = useState()

	const messageContent = useRef()

	const displayMessages = {
		text: [],
		count: 0
	}

	const observable = new Observable(obs => {
		obs.next(message);
	});

	const observer  = {
		next: v => {
			displayMessages.text.push(...v)
		}
	}

	observable.subscribe(observer)

	const submitHandler = e => {
		e.preventDefault();
		setMessage(searches => searches.concat(messageContent.current.value))
		setTime(new Date().toLocaleString())
	}

	return (
		<div className="App">
			<ChatContainer>
				<Messages message={displayMessages} time={time}/>
				<Form onSubmit={submitHandler}>
					<Textarea messageContent={messageContent}></Textarea>
					<Button />
				</Form>
			</ChatContainer>
		</div>
	);
}

export default App;

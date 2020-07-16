import React, {useState, useRef} from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Subject } from 'rxjs';
import Store from './store/Store';

import Header from './components/ChatInterface/Header'
import Messages from './components/Messages/Messages';
import Textarea from './components/Message/Textarea'
import Button from './components/Message/Button'
import GenerateLink from './components/GenerateLink/GenerateLink'

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

function App() {

	const [message, setMessage] = useState([])
	const chatLinkFromStore = localStorage.getItem('link')

	const messageContent = useRef()

	let displayMessagesToFirstSubscriber = []
	let displayMessagesToSecondSubscriber = []

	//RXJS SUBSCRIPTION START
	const subject = new Subject();

	subject.subscribe({
		next: (m1) => {
			m1.map((content) => {
				displayMessagesToFirstSubscriber.push(content)
			})
		}
	});
	subject.subscribe({
		next: (m2) => {
			m2.map((content) => {
				displayMessagesToSecondSubscriber.push(content)
			})
		}
	});

	subject.next(message);

	//CHAT DATA HANLDER
	const submitHandler = e => {
		e.preventDefault();
		let date = new Date();
		setMessage(messagesVal => messagesVal.concat({
			content: messageContent.current.value,
			time: `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()} `
		}))
	}

	return (
		<Store>
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/">
							<GenerateLink />
						</Route>
						<Route exact path={`/${chatLinkFromStore}`}>
							<ChatContainer>
								<Header chatLinkFromStore={chatLinkFromStore} />
								<Messages firstSub={displayMessagesToFirstSubscriber} secondSub={displayMessagesToSecondSubscriber}/>
								<Form onSubmit={submitHandler}>
									<Textarea messageContent={messageContent}></Textarea>
									<Button />
								</Form>
							</ChatContainer>
						</Route>
					</Switch>
				</Router>
			</div>
		</Store>
	);
}

export default App;

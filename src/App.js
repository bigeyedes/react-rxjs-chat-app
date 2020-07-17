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

const ChangeUser = styled.div`
	background: #DAD0EB;
	color: #fff;
	padding: 5px;
	font-weight: 800;
	font-size: 16px;
	border: none;
	cursor: pointer;
	text-align: center
`

function App() {

	const [message, setMessage] = useState([])
	const [user, setUser] = useState('user_1')
	const chatLinkFromStore = localStorage.getItem('link')

	const messageContent = useRef()

	let massages = []

	//RXJS SUBSCRIPTION START
	const subject = new Subject();

	subject.subscribe({
		next: (m1) => {
			m1.map((content) => {
				massages.push(content)
			})
		}
	});

	subject.next(message);

	//CHAT DATA HANLDER
	const sendMessageHandler = e => {
		e.preventDefault();
		let date = new Date();

		setMessage(messagesVal => messagesVal.concat({
			user: user,
			content: messageContent.current.value,
			time: `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
		}))
	}

	const userChangeHandler = () => {
		if(user === 'user_1') {
			setUser('user_2')
		} else {
			setUser('user_1')
		}
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
								<ChangeUser onClick={userChangeHandler}>Switch user: {user}</ChangeUser>
								<Messages messageSubscription={massages} />
								<Form onSubmit={sendMessageHandler}>
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

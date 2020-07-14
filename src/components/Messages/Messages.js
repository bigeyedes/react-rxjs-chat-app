import React from 'react';
import styled from 'styled-components'

const MessagesWrapper = styled.div`
	height: 80%;
	overflow-y: scroll;
	scrollbar-width: none;
	background: #FBFAFD;
	width: 100%;
`
const Message = styled.div`
	margin: 5px 0;
	width: 100%;
	margin: 10px;
`
const FirstSubscriber = styled.div`
	width: 100%
`
const SecondSubscriber = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	text-align: right;
	flex-wrap: wrap;
`
const Content = styled.p`
	font-size: 14px;
	margin: 0;
	color: #D2C5E8;
	width: min-content;
	background: #fff;
	padding: 10px 20px;
	border-radius: 10px;
	display: inline-block
`
const Time = styled(Content)`
	color: #6E6E6E;
	background: none;
	padding: 5px;
	font-size: 10px;
	min-width: 50px;
	width: 100%;
`

const Messages = (props) => {

	return(
		<MessagesWrapper>
			<FirstSubscriber>
				{props.firstSub.map((message, i) => {
					return<Message key={i}><Time>{message.time}</Time><Content>{message.content}</Content></Message>
				})}
			</FirstSubscriber>
			{/* <SecondSubscriber>
				{props.secondSub.map((message, i) => {
					return<Message key={i}><Time>{message.time}</Time><Content>{message.content}</Content></Message>
				})}
			</SecondSubscriber> */}
		</MessagesWrapper>
	)
}

export default Messages

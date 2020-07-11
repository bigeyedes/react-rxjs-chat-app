import React, {useState} from 'react';
import styled from 'styled-components'

const Messages = (props) => {

	const MessagesWrapper = styled.div`
		height: 80%;
		overflow-y: scroll;
		scrollbar-width: none;
		background: #FBFAFD
	`

	const Message = styled.div`
		background: #fff;
		padding: 10px 20px;
		border-radius: 10px;
		margin: 5px 0;
		width: min-content;
		margin: 10px
	`

	const Content = styled.p`
		font-size: 14px;
		margin: 0;
		color: #D2C5E8;
	`

	const Time = styled(Content)`
		color: #6E6E6E;
		font-size: 10px;
		min-width: 50px;
	`

	return(
		<MessagesWrapper>
		{props.messages.map((message, i) => {
			return<Message key={i}><Time>{message.time}</Time><Content>{message.content}</Content></Message>
		})}
		</MessagesWrapper>
	)
}

export default Messages

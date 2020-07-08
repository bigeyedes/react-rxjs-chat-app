import React, {useState} from 'react';
import styled from 'styled-components'

const Messages = (props) => {

	const MessagesWrapper = styled.div`
		height: 80%;
		overflow-y: scroll;
		scrollbar-width: none;
	`

	const Message = styled.div`
		background: #66FCF1;
		padding: 10px;
		border-radius: 10px;
		color: #fff;
		margin: 5px 0;
		width: min-content;
	`

	return(
		<MessagesWrapper>
		{props.message.text.map((message, i) => {
			return <Message key={i}>{message}</Message>
		})}
		</MessagesWrapper>
	)
}

export default Messages

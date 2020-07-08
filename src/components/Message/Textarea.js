import React from 'react';
import styled from 'styled-components'

const Message = (props) => {
	const MessageField = styled.textarea`
		height: 50px;
		width: 90%;
		border: none;
		border-top: 1px solid #E3E3E3;
		padding: 10px;
		&:focus {
			outline: none;
			box-shadow: none
		}

	`
	const messageContent = props.messageContent

	return(
		<>
		<MessageField placeholder="Write something..." ref={messageContent}></MessageField>
		</>
	)
}

export default Message

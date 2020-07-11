import React from 'react';
import styled from 'styled-components'

const Message = (props) => {
	const MessageField = styled.textarea`
		height: 80px;
		width: 90%;
		border: none;
		box-shadow: 0 -20px 40px rgba(244, 238, 253, 0.8);
		padding: 10px;
		font-weight: 800;
		font-family: 'Nunito', sans-serif;
		&:focus {
			outline: none;
			box-shadow: none
		}
		::placeholder,
		::-webkit-input-placeholder {
			font-family: 'Nunito', sans-serif;
			font-weight: 800;
			color: #DAD0EB;
		}
		:-ms-input-placeholder {
			font-family: 'Nunito', sans-serif;
			font-weight: 800;
			color: #DAD0EB;
		}
		@media(max-width: 1200px){
			width: 100%
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

import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
	background: #fff;
	color: #DAD0EB;
	text-align: center;
	padding: 20px;
	box-shadow: 0 0px 40px rgba(244, 238, 253, 0.8);
	font-weight: 800;
	font-size: 24px
`

const CloseChat = styled.button`
	background: #DAD0EB;
	color: #fff;
	padding: 5px;
	font-weight: 800;
	font-size: 16px;
	border: none;
	cursor: pointer
`

const Header = (props) => {

	const closeChatHanlder = () => {
		window.location.href = '/'
		localStorage.clear();
	}

	return(
		<div>
			<HeaderContainer>Chat number: {props.chatLinkFromStore} <CloseChat onClick={closeChatHanlder}>Close chat</CloseChat></HeaderContainer>
		</div>
	)
}

export default Header

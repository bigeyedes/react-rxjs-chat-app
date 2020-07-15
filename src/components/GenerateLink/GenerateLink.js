import React, {useContext} from 'react';
import styled from 'styled-components';
import LinkContext from '../../LinkContext'

const GenerateWrapper = styled.div`
	background: #FBFAFD;
	text-align: center;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
const ButtonGenerate = styled.button`
	padding: 20px;
	background: #fff;
	font-family: 'Nunito', sans-serif;
	color: #D2C5E8;
	border: none;
	cursor: pointer;
	font-weight: 800;
	font-size: 18px;
	transition: .3s all ease;
	&:hover {
		background: #DAD0EB;
		color: #fff
	}
`

const YourLink = styled.p`
	font-family: 'Nunito', sans-serif;
	font-weight: 800;
	font-size: 24px;
`

const YourLinkBtn = styled.a`
	font-family: 'Nunito', sans-serif;
	font-weight: 800;
	font-size: 24px;
	display: block;
	margin-top: 20px;
	color: #000;
	text-decoration: none
`

const GenerateLink = ({onClick}) => {
	const newChatLink = React.useContext(LinkContext)

	return(
		<GenerateWrapper>
			<div>
			<YourLink>Generate link and send to someone you want to talk</YourLink>
				<ButtonGenerate onClick={onClick}>Generate Link</ButtonGenerate>
			<YourLinkBtn href={newChatLink}>{newChatLink}</YourLinkBtn>
			</div>
		</GenerateWrapper>
	)
}

export default GenerateLink

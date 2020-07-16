import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../../store/Store'
import styled from 'styled-components';

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

const GenerateLink = () => {
	const [link, setLink] = useState('')
	const [state, dispatch] = useContext(Context)

	//RANDOM LINK GENERATOR
	const generateLink = () => {
		setLink(Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5))
	}

	useEffect(() => {
		const newLink = link;
		dispatch({type: 'ADD_LINK', payload: newLink});
	}, [link])

	return(
		<GenerateWrapper>
			<div>
			<YourLink>Generate link and send to someone you want to talk</YourLink>
				<ButtonGenerate onClick={generateLink}>Generate Link</ButtonGenerate>
				<YourLinkBtn href={link}>{link}</YourLinkBtn>
			</div>
		</GenerateWrapper>
	)
}

export default GenerateLink

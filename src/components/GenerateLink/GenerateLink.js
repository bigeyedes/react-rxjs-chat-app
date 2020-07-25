import React, {useState, useContext, useEffect, useRef} from 'react';
import {Context} from '../../store/Store'
import styled from 'styled-components';

import firebase from '../../firebase/config'

const GenerateWrapper = styled.div`
	background: #FBFAFD;
	text-align: center;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
const NameInput = styled.input`
	padding: 20px;
	background: #fff;
	font-family: 'Nunito', sans-serif;
	color: #D2C5E8;
	border: none;
	font-weight: 800;
	font-size: 18px;
	transition: .3s all ease;
	&:hover {
		background: #DAD0EB;
		color: #fff
	}
	&:focus {
		border: none;
		outline: none
	}
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
	const [name, setName] = useState('')
	const nameRef = useRef('')

	const nameLinkGenerator = (e) => {
		e.preventDefault();
		setLink(Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5))
		setName(nameRef.current.value)
	}

	useEffect(() => {
		const data = {
			name: name,
			link: link
		};
		dispatch({type: 'ADD_ROOM', payload: data});
	}, [link])

	return(
		<GenerateWrapper>
			<div>
			<YourLink>Generate link and send to someone you want to talk</YourLink>
				<form onSubmit={nameLinkGenerator}>
					<NameInput ref={nameRef} type="text" placeholder="Type name..." />
					<ButtonGenerate type="submit">Generate Link</ButtonGenerate>
				</form>
				<YourLinkBtn href={link}>{link}</YourLinkBtn>
			</div>
		</GenerateWrapper>
	)
}

export default GenerateLink

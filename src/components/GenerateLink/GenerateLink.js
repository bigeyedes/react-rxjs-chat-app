import React, {useState} from 'react';
import styled from 'styled-components'

const GenerateWrapper = styled.div`
	background: #FBFAFD;
	text-align: center;
	padding: 50px 10px
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
	font-size: 24px
`

const GenerateLink = (props) => {
	const [link, setLink] = useState()

	const generateLink = () => {
		setLink(window.location.href + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
	}

	return(
		<GenerateWrapper>
			<YourLink>Generate link and send to someone you want to talk</YourLink>
			<ButtonGenerate onClick={generateLink}>Generate Link</ButtonGenerate>
			<YourLink>{link}</YourLink>
		</GenerateWrapper>
	)
}

export default GenerateLink

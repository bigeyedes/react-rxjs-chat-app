import React from 'react';
import styled from 'styled-components'

const Button = () => {
	const Button = styled.button`
		background: #A271C8;
		color: #fff;
		border: none;
		padding: 10px 20px;
		cursor: pointer;
		transition: .3s all ease;
		postion: relative;
		z-index: 1;
		width: 8%;
		&:hover {
			background: #8553ac;
		}
		@media(max-width: 1200px){
			width: auto;
		}
	`

	return(
		<>
		<Button type="submit">Send</Button>
		</>
	)
}

export default Button

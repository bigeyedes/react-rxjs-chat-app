import React from 'react';
import styled from 'styled-components'

const Button = () => {
	const Button = styled.button`
		background: #212831;
		color: #fff;
		border: none;
		padding: 10px 20px;
		cursor: pointer;
		transition: .3s all ease;
		&:hover {
			background: #66FCF1;
		}
	`

	return(
		<>
		<Button type="submit">Send</Button>
		</>
	)
}

export default Button

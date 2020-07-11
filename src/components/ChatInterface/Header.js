import React from 'react';
import styled from 'styled-components'

const Header = () => {
	const Header = styled.div`
		background: #fff;
		color: #DAD0EB;
		text-align: center;
		padding: 20px;
		box-shadow: 0 0px 40px rgba(244, 238, 253, 0.8);
		font-weight: 800;
		font-size: 24px
	`

	return(
		<div>
			<Header>Chat number</Header>
		</div>
	)
}

export default Header

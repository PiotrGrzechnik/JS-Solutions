import React, { FunctionComponent, memo } from 'react';
import styled from 'styled-components';

const IconContainer = styled.span`
	font-size: 18px;
	margin-right: 8px;
	vertical-align: middle;
`;

interface IconProps {
	name: string;
}

const Icon: FunctionComponent<IconProps> = ({ name, ...restProps }) => (
	<IconContainer {...restProps}>
		<i className={name}></i>
	</IconContainer>
);

export default memo(Icon);

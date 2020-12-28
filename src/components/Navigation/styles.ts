import styled from 'styled-components';

export const Container = styled.div`    
	display: flex;
	background: #FFF;
	justify-content: center;
	align-items: center;
	height: 72px;
	width: 100%;
	min-width: 1000px;
`;

interface Props {
	isSelected: number;
	isSelectable: number;
	isCompleted: number;
}

export const Option = styled.button<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 180px;
	height: 100%;
	font-family: 'Bebas neue', sans-serif;
	font-weight: 700;
	font-size: 18px;
	background: #FFF;
	border: 0;
	color: #bbc3cb;
	${(props) => (props.isSelected && props.isCompleted) && `
			color: #42515f;
			border-bottom: 3px solid #9e43ba;
	`};

	${(props) => (!props.isSelected && props.isCompleted) && `
			color: #022c82;
			cursor: pointer;

			&:hover {
					border-bottom: 3px solid #022c82;
			}
	`};

	${(props) => (props.isSelected && !props.isCompleted && !props.isSelectable) && `
			color: #42515f;
			border-bottom: 3px solid #9e43ba;

	`};

	${(props) => (!props.isSelected && !props.isCompleted && !props.isSelectable) && `
			cursor: not-allowed;
	`};

	${(props) => (props.isSelectable) && `
		cursor: pointer;
		color: #42515f;

		&:hover {
				border-bottom: 3px solid #9e43ba;
		}
	`};

`;

export const WhatSelected = styled.div`    
	display: flex;
	cursor: default;
	user-select: none;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 180px;
	height: 100%;
	font-family: 'Bebas Neue', sans-serif;
	font-weight: 700;
	font-size: 18px;
	background: #FFF;
	border: 0;
	color: #bbc3cb;
`;

export const WhatTitle = styled.span`
	font-size: 15px;
	color: #9e43ba;
	margin-bottom: 5px;
`;

export const WhatOptions = styled.div`
	font-size: 15px;
	color: #9e43ba;

`;

interface WhatProps {
	isSelected: number;
	isCompleted: number;
}

export const WhatVerbGoal = styled.button<WhatProps>`
	font-size: 15px;
	font-family: 'Bebas neue', sans-serif;
	font-weight: 700;
	color: #42515f;
	margin: 0 5px;
	background: #FFF;
	border: 1px solid #9e43ba;
	padding: 2px 4px;
	border-radius: 5px;
	cursor: pointer;

	${(props) => (props.isSelected) && `
		color: #FFF;
		background: #9e43ba;
		cursor: default;
	`};
	
	${(props) => (!props.isSelected && props.isCompleted) && `
		color: #022c82;
		border: 1px solid #022c82;
		background: #FFF;
		cursor: pointer;
	`};
`;
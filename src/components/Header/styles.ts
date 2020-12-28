import styled from 'styled-components';
// import board from '../../assets/board.gif';
import board from '../../assets/Imagem_fundo.png';

export const Container = styled.div`
	display: flex;
	height: 200px;
	min-width: 1000px;
	background: url(${board}) 0 0 repeat-y;
	background-size: 100% 100%;
	color: #f6f6f6;
	overflow: hidden;
	position: relative;
	align-items: stretch;
	justify-content: center;
`;

export const WrapperContent = styled.div`
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	max-width: 990px;
	flex: 0 0 990px;
	align-items: center;
	position: relative;
	padding-left: 180px;
	background-size: 100% 100%;
	color: #f6f6f6;
	overflow: hidden;
	flex: 0 0 200px;
	position: relative;
	align-items: stretch;
	min-width: 1000px;
`;

export const Einstein = styled.img`
	transform: scale(.5) translate3d(0,0,0);
	bottom: 0;
	left: 0;
	position: absolute;
	transform-origin: 0 bottom 0;
	width: 30%;
	height: auto;
  user-select: none;
`;

export const PhraseCentrilizer = styled.div`
	display: flex;
	align-items: center;
`;

export const PhraseContainer = styled.div`
	user-select: none;
	cursor: default;
	font: 28px/1.3em 'Bebas neue',cursive;
	margin: 25px 0;
	box-sizing: border-box;
	display: block;
`;

interface Props {
	isSelected: number;
}

export const Text = styled.span<Props>`
	font-weight: 700;
	user-select: none;
	cursor: default;
	font: 28px/1.3em 'Bebas neue', cursive;
	


	${(props) => (props.isSelected) && `
			text-decoration: underline;
	`};
`;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.PhraseContainer = exports.PhraseCentrilizer = exports.Einstein = exports.WrapperContent = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Imagem_fundo = _interopRequireDefault(require("../../assets/Imagem_fundo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import board from '../../assets/board.gif';
const Container = _styledComponents.default.div`
	display: flex;
	height: 200px;
	min-width: 1000px;
	background: url(${_Imagem_fundo.default}) 0 0 repeat-y;
	background-size: 100% 100%;
	color: #f6f6f6;
	overflow: hidden;
	position: relative;
	align-items: stretch;
	justify-content: center;
`;
exports.Container = Container;
const WrapperContent = _styledComponents.default.div`
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
exports.WrapperContent = WrapperContent;
const Einstein = _styledComponents.default.img`
	transform: scale(.5) translate3d(0,0,0);
	bottom: 0;
	left: 0;
	position: absolute;
	transform-origin: 0 bottom 0;
	width: 30%;
	height: auto;
  user-select: none;
`;
exports.Einstein = Einstein;
const PhraseCentrilizer = _styledComponents.default.div`
	display: flex;
	align-items: center;
`;
exports.PhraseCentrilizer = PhraseCentrilizer;
const PhraseContainer = _styledComponents.default.div`
	user-select: none;
	cursor: default;
	font: 28px/1.3em 'Bebas neue',cursive;
	margin: 25px 0;
	box-sizing: border-box;
	display: block;
`;
exports.PhraseContainer = PhraseContainer;
const Text = _styledComponents.default.span`
	font-weight: 700;
	user-select: none;
	cursor: default;
	font: 28px/1.3em 'Bebas neue', cursive;
	


	${props => props.isSelected && `
			text-decoration: underline;
	`};
`;
exports.Text = Text;
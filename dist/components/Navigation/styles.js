"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhatVerbGoal = exports.WhatOptions = exports.WhatTitle = exports.WhatSelected = exports.Option = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div`    
	display: flex;
	background: #FFF;
	justify-content: center;
	align-items: center;
	height: 72px;
	width: 100%;
	min-width: 1000px;
`;
exports.Container = Container;
const Option = _styledComponents.default.button`
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
	${props => props.isSelected && props.isCompleted && `
			color: #42515f;
			border-bottom: 3px solid #9e43ba;
	`};

	${props => !props.isSelected && props.isCompleted && `
			color: #022c82;
			cursor: pointer;

			&:hover {
					border-bottom: 3px solid #022c82;
			}
	`};

	${props => props.isSelected && !props.isCompleted && !props.isSelectable && `
			color: #42515f;
			border-bottom: 3px solid #9e43ba;

	`};

	${props => !props.isSelected && !props.isCompleted && !props.isSelectable && `
			cursor: not-allowed;
	`};

	${props => props.isSelectable && `
		cursor: pointer;
		color: #42515f;

		&:hover {
				border-bottom: 3px solid #9e43ba;
		}
	`};

`;
exports.Option = Option;
const WhatSelected = _styledComponents.default.div`    
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
exports.WhatSelected = WhatSelected;
const WhatTitle = _styledComponents.default.span`
	font-size: 15px;
	color: #9e43ba;
	margin-bottom: 5px;
`;
exports.WhatTitle = WhatTitle;
const WhatOptions = _styledComponents.default.div`
	font-size: 15px;
	color: #9e43ba;

`;
exports.WhatOptions = WhatOptions;
const WhatVerbGoal = _styledComponents.default.button`
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

	${props => props.isSelected && `
		color: #FFF;
		background: #9e43ba;
		cursor: default;
	`};
	
	${props => !props.isSelected && props.isCompleted && `
		color: #022c82;
		border: 1px solid #022c82;
		background: #FFF;
		cursor: pointer;
	`};
`;
exports.WhatVerbGoal = WhatVerbGoal;
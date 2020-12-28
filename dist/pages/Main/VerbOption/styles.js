"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormButton = exports.FormWrapper = exports.Correction = exports.Verb = exports.VerbsWrapper = exports.Option = exports.OptionsWrapper = exports.BodyWrapper = exports.SubTitle = exports.Title = exports.TitleWrapper = exports.Header = exports.ContentWrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 1000px;
  padding: 25px 50px 25px 50px;
`;
exports.Container = Container;
const ContentWrapper = _styledComponents.default.div`
  background: #FFF;
  max-width: 1000px;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
`;
exports.ContentWrapper = ContentWrapper;
const Header = _styledComponents.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
exports.Header = Header;
const TitleWrapper = _styledComponents.default.div`
`;
exports.TitleWrapper = TitleWrapper;
const Title = _styledComponents.default.title`
  display: flex;
  cursor: default;
  flex: 1 1 100%;
  color: #63798e;
  font: 20px/36px 'Bebas neue',sans-serif;
  margin: 0;
  user-select: none;
`;
exports.Title = Title;
const SubTitle = _styledComponents.default.title`
  display: flex;
  cursor: default;
  flex: 1 1 100%;
  color: #86a6c5;;
  font: 15px 'Bebas neue',sans-serif;
  margin: 0 0 20px;
  user-select: none;
`;
exports.SubTitle = SubTitle;
const BodyWrapper = _styledComponents.default.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
exports.BodyWrapper = BodyWrapper;
const OptionsWrapper = _styledComponents.default.div`
  padding-right: 20px;
  border-right: 1px solid #ccc;
`;
exports.OptionsWrapper = OptionsWrapper;
const Option = _styledComponents.default.button`
  display: flex;
  width: 100%;
  user-select: none;
  align-items: center;
  justify-content: flex-start;
  color: #63798e;
  font-family: 'Bebas neue',sans-serif;
  font-weight: 700;
  background: #fff;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  padding: 5px 20px;
  margin: 10px 10px 10px 0;
  cursor: pointer;

  ${props => props.isSelected && `
    background: #9e43ba;
    color: #FFF;
    cursor: default;
	`};

  ${props => !props.isSelected && `
    &:hover {
      background: #e9f0f4;
    }
	`};

`;
exports.Option = Option;
const VerbsWrapper = _styledComponents.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0 0 30px 0;
`;
exports.VerbsWrapper = VerbsWrapper;
const Verb = _styledComponents.default.button`
  display: flex;
  text-transform: uppercase;
  user-select: none;
  height: 50px;
  width: 120px;
  align-items: center;
  justify-content: center;
  color: #63798e;
  font-family: 'Bebas neue',sans-serif;
  background: #e9f0f4;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  padding: 10px;
  margin: 5px;
  
  ${props => props.isSelected && `
    background: #9e43ba;
    color: #FFF;
    cursor: default;
	`};

  ${props => !props.isSelected && `
    cursor: pointer;
    &:hover {
      background: #fff;
    }
	`};
`;
exports.Verb = Verb;
const Correction = _styledComponents.default.div`
  margin-left: 50px;
`;
exports.Correction = Correction;
const FormWrapper = _styledComponents.default.div`
  padding: 0 0 30px 0;
`;
exports.FormWrapper = FormWrapper;
const FormButton = _styledComponents.default.button`
  width: 150px;
  height: 50px;
  background: #e0e0e0;
  color: #FFF;
  border-radius: 5px;
  border: none;
  user-select: none;
  font: 700 20px/1.2em 'Bebas neue',sans-serif;


  ${props => props.verb !== '' && `
    background: #022c82;
    cursor: pointer;

    &:hover {
      background: #224ca2;
    }
	`};

`;
exports.FormButton = FormButton;
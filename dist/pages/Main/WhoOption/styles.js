"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = exports.ExampleTitle = exports.ExampleContainer = exports.Arrow = exports.ExamplesWrapper = exports.FormButton = exports.FormInput = exports.FormWrapper = exports.Title = exports.TitleWrapper = exports.ContentWrapper = exports.Container = void 0;

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
const TitleWrapper = _styledComponents.default.div`
`;
exports.TitleWrapper = TitleWrapper;
const Title = _styledComponents.default.title`
  display: flex;
  cursor: default;
  flex: 1 1 100%;
  color: #63798e;
  font: 20px/34px 'Bebas Neue',sans-serif;
  margin: 0 0 20px;
  user-select: none;
`;
exports.Title = Title;
const FormWrapper = _styledComponents.default.div`
  display: flex;
  flex: 1 1 100%;
  padding: 0 0 30px 0;
`;
exports.FormWrapper = FormWrapper;
const FormInput = _styledComponents.default.input`
  width: 100%;
  margin-right: 20px;
  height: 50px;
  border: 1px solid #9e43ba;
  border-radius: 5px;
  padding: 0 15px;
`;
exports.FormInput = FormInput;
const FormButton = _styledComponents.default.button`
  width: 150px;
  height: 50px;
  background: #e0e0e0;
  color: #FFF;
  border-radius: 5px;
  border: none;
  user-select: none;
  font: 700 20px/1.2em 'Bebas neue',sans-serif;


  ${props => props.who !== '' && `
    background: #022c82;
    cursor: pointer;

    &:hover {
      background: #224ca2;
    }
	`};

`;
exports.FormButton = FormButton;
const ExamplesWrapper = _styledComponents.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
exports.ExamplesWrapper = ExamplesWrapper;
const Arrow = _styledComponents.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #FFF;
  font: 40px 'Nanum Gothic', sans-serif;
  color:  #bbc3cb;
  cursor: pointer;
  padding: 5px 10px;
  user-select: none;

  &:hover {
    text-shadow: 0px 0px 2px #00FF;
  }
  
`;
exports.Arrow = Arrow;
const ExampleContainer = _styledComponents.default.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: center;
`;
exports.ExampleContainer = ExampleContainer;
const ExampleTitle = _styledComponents.default.div`
  padding: 10px;
  color: #8fadca;
  font-weight: 600;
  font-family: 'Bebas neue';
  font-size: 20px;
  line-height: 36px;
  user-select: none;
  cursor: default;
`;
exports.ExampleTitle = ExampleTitle;
const Example = _styledComponents.default.div`
  color: #63798e;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  font-family: 'Bebas neue',sans-serif;
  padding: 10px;
`;
exports.Example = Example;
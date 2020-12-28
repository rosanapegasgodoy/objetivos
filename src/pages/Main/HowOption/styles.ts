import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 1000px;
  padding: 25px 50px 25px 50px;
`;

export const ContentWrapper = styled.div`
  background: #FFF;
  max-width: 1000px;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
`;

export const TitleWrapper = styled.div`
`;

export const Title = styled.title`
  display: flex;
  cursor: default;
  flex: 1 1 100%;
  color: #63798e;
  font: 20px/34px 'Bebas neue',sans-serif;
  margin: 0 0 20px;
  user-select: none;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  padding: 0 0 30px 0;
`;

export const FormInput = styled.input`
  width: 100%;
  margin-right: 20px;
  height: 50px;
  border: 1px solid #9e43ba;
  border-radius: 5px;
  padding: 0 15px;
`;

interface ButtonProps {
  who: string;
}

export const FormButton = styled.button<ButtonProps>`
  width: 150px;
  height: 50px;
  background: #e0e0e0;
  color: #FFF;
  border-radius: 5px;
  border: none;
  user-select: none;
  font: 700 20px/1.2em 'Bebas neue',sans-serif;


  ${(props) => (props.who !== '') && `
    background: #022c82;
    cursor: pointer;

    &:hover {
      background: #224ca2;
    }
	`};

`;

export const ExamplesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Arrow = styled.button`
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

export const ExampleContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: center;
`;

export const ExampleTitle = styled.div`
  padding: 10px;
  color: #8fadca;
  font-weight: 600;
  font-family: 'Bebas neue';
  font-size: 20px;
  line-height: 36px;
  user-select: none;
  cursor: default;
`;

export const Example = styled.div`
  color: #63798e;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  font-family: 'Bebas neue',sans-serif;
  padding: 10px;
`;

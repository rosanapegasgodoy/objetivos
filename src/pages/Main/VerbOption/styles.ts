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

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TitleWrapper = styled.div`
`;

export const Title = styled.title`
  display: flex;
  cursor: default;
  flex: 1 1 100%;
  color: #63798e;
  font: 20px/36px 'Bebas neue',sans-serif;
  margin: 0;
  user-select: none;
`;

export const SubTitle = styled.title`
  display: flex;
  cursor: default;
  flex: 1 1 100%;
  color: #86a6c5;;
  font: 15px 'Bebas neue',sans-serif;
  margin: 0 0 20px;
  user-select: none;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const OptionsWrapper = styled.div`
  padding-right: 20px;
  border-right: 1px solid #ccc;
`;

interface OptionProps {
  isSelected: number;
}

export const Option = styled.button<OptionProps>`
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

  ${(props) => (props.isSelected) && `
    background: #9e43ba;
    color: #FFF;
    cursor: default;
	`};

  ${(props) => (!props.isSelected) && `
    &:hover {
      background: #e9f0f4;
    }
	`};

`;

export const VerbsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0 0 30px 0;
`;

export const Verb = styled.button<OptionProps>`
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
  
  ${(props) => (props.isSelected) && `
    background: #9e43ba;
    color: #FFF;
    cursor: default;
	`};

  ${(props) => (!props.isSelected) && `
    cursor: pointer;
    &:hover {
      background: #fff;
    }
	`};
`;

export const Correction = styled.div`
  margin-left: 50px;
`;

export const FormWrapper = styled.div`
  padding: 0 0 30px 0;
`;

interface ButtonProps {
  verb: string;
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


  ${(props) => (props.verb !== '') && `
    background: #022c82;
    cursor: pointer;

    &:hover {
      background: #224ca2;
    }
	`};

`;
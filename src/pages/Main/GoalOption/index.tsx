import React, { useState } from 'react';
import {
	Container,
	ContentWrapper,
	ExamplesWrapper,
	Arrow,
	ExampleContainer,
	ExampleTitle,
	Example,
	FormButton,
	FormInput,
	FormWrapper,
	Title,
	TitleWrapper
} from './styles';

interface Props {
	setSection: Function;
	setGoal: Function;
	goal: string;
}

const GoalOption: React.FC<Props> = ({ setSection, setGoal, goal }) => {
	const [iExample, setIExample] = useState(0);

	const examples = [
		'O provável efeito das emissões históricas de fósseis humanos e mudanças no uso da terra no balanço de energia e clima da Terra',
	];
        
	function handleChange(event: any) {
		setGoal(event.target.value);
	}

	function handleSubmit() {
		if(goal !== '') {
			setSection(4);
		}
	}

	function handleDecreaseExample() {
		if(iExample === 0) {
			setIExample((examples.length - 1));
		} else setIExample(iExample - 1);
	}

	function handleIncreaseExample() {
		if(iExample === (examples.length - 1)) {
			setIExample(0);
		} else setIExample(iExample + 1);
	}

	return(
		<Container>
			<ContentWrapper>
				<TitleWrapper>
					<Title>Qual é a tarefa que o aluno deve fazer?</Title>
				</TitleWrapper>
				<FormWrapper>
					<FormInput onChange={handleChange} value={goal}/>
					<FormButton goal={goal} onClick={handleSubmit}>Proximo {'>>'}</FormButton>
				</FormWrapper>
				<ExamplesWrapper>
					<Arrow onClick={handleDecreaseExample}>{'<'}</Arrow>
					<ExampleContainer>
						<ExampleTitle>Exemplo: </ExampleTitle>
						<Example>{examples[iExample]}</Example>
					</ExampleContainer>
					<Arrow onClick={handleIncreaseExample}>{'>'}</Arrow>
				</ExamplesWrapper>
			</ContentWrapper>
		</Container>
	);
};

export default GoalOption;
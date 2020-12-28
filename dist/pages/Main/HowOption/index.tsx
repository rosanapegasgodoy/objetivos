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
	setHow: Function;
	how: string;
}

const HowOption: React.FC<Props> = ({ setSection, setHow, how }) => {
	const [iExample, setIExample] = useState(0);

	const examples = [
		'Para pequenas empresas',
	];

	function handleChange(event: any) {
		setHow(event.target.value);
	}

	function handleSubmit() {
		if(how !== '') {
			setSection(5);
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
					<Title>Qual é a condição?</Title>
				</TitleWrapper>
				<FormWrapper>
					<FormInput onChange={handleChange} value={how}/>
					<FormButton who={how} onClick={handleSubmit}>Proximo {'>>'}</FormButton>
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

export default HowOption;
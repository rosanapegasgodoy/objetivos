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
	setWho: Function;
	who: string;
}

const WhoOption: React.FC<Props> = ({ setSection, setWho, who }) => {
	const [iExample, setIExample] = useState(0);

	const examples = [
		'IT Auditor – Senior',
		'IT Business Management Executive',
		'IT Capacity Planner',
		'IT Change Management Analyst – Associate',
		'IT Change Management Analyst - Intermediate',
	];

	function handleChange(event: any) {
		setWho(event.target.value);
	}

	function handleSubmit() {
		if(who !== '') {
			setSection(2);
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
					<Title>Quem é o seu público alvo?</Title>
				</TitleWrapper>
				<FormWrapper>
					<FormInput onChange={handleChange} value={who}/>
					<FormButton who={who} onClick={handleSubmit}>Proximo {'>>'}</FormButton>
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

export default WhoOption;
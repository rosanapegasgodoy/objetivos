import React, { useState } from 'react';
import { Container, ContentWrapper, ExamplesWrapper, FormButton, FormInput, FormWrapper, Title, TitleWrapper } from './styles';
import emailValidation from 'email-validator';
import api from '../../../services_front/api';

interface Props {
	setSection: Function;
	who: string;
	setWho: Function;
	verb: string;
	setVerb: Function;
	goal: string;
	setGoal: Function;
	how: string;
	setHow: Function;
}

const GetOption: React.FC<Props> = ({
	setSection,
	setWho,
	who,
	setVerb,
	verb,
	setGoal,
	goal,
	setHow,
	how,
}) => {
	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);

	function handleChange(event: any) {
		setValidEmail(emailValidation.validate(event.target.value))
		setEmail(event.target.value);
	}

	async function handleSubmit() {
		if(!validEmail) {
			alert("Insira um e-mail valido!");
			return;
		}
		await api.post('/objectives', {
			email,
			who,
			verb,
			goal,
			how
		});

		alert("Frase enviada com sucesso!");
		setWho('');
		setVerb('');
		setGoal('');
		setHow('');
		setSection(1);


	}

	return (
		<Container>
			<ContentWrapper>
				<TitleWrapper>
					<Title>Parabéns! Você completou a frase:</Title>
				</TitleWrapper>
				<ExamplesWrapper>
					{`"${who} será capaz de ${verb} ${goal} ${how}"`}
				</ExamplesWrapper>
				<FormInput onChange={handleChange} value={email}/>
				<FormButton email={validEmail ? 1 : 0} onClick={handleSubmit}>Enviar para meu E-mail</FormButton>
			</ContentWrapper>
		</Container>
	)
}

export default GetOption;
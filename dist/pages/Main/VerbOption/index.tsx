import React, { useState } from 'react';
import {
	Container,
	ContentWrapper,
	Header,
	TitleWrapper,
	Title,
	SubTitle,
	BodyWrapper,
	OptionsWrapper,
	Option,
	VerbsWrapper,
	Verb,
	FormButton,
	FormWrapper,
	Correction,
} from './styles';

interface Props {
	setSection: Function;
	verb: string;
	setVerb: Function;
}

const VerbOption: React.FC<Props> = ({setSection, verb, setVerb}) => {
	const [option, setOption] = useState(1);

	const remembering = [
		'Listar',
		'Relembrar',
		'Reconhecer',
		'Identificar',
		'Localizar',
		'Descrever',
		'Citar',
	];

	const understanding = [
		'Esquematizar',
		'Relacionar',
		'Explicar',
		'Demonstrar',
		'Parafrasear',
		'Associar',
		'Converter',
	];

	const applying = [
		'Utilizar',
		'Implementar',
		'Modificar',
		'Experimentar',
		'Calcular',
		'Demonstrar',
		'Classificar',
	];

	const analyzing = [
		'Resolver',
		'Categorizar',
		'Diferenciar',
		'Comparar',
		'Explicar',
		'Integrar',
		'Investigar',
	];

	const evaluating = [
		'Defender',
		'Delimitar',
		'Estimar',
		'Selecionar',
		'Justificar',
		'Comparar',
		'Explicar',
	];

	const creating = [
		'Elaborar',
		'Desenhar',
		'Produzir',
		'Prototipar',
		'Traçar',
		'Idear',
		'Inventar',
	];
	
	function handleVerb(selectedVerb: string) {
		setVerb(selectedVerb);
	};

	function handleNext() {
		if(verb !== ''){
			setSection(3);
		}
	}
        
	return(
		<Container>
			<ContentWrapper>
				<Header>
					<TitleWrapper>
						<Title>Escolha o nível de conhecimento a ser obtido</Title>
						<SubTitle>Baseado na taxonomia de Bloom</SubTitle>
					</TitleWrapper>
					<FormWrapper>
						<FormButton verb={verb} onClick={handleNext}>Proximo {'>>'}</FormButton>
					</FormWrapper>
				</Header>
				<BodyWrapper>
					<OptionsWrapper>
						<Option
							isSelected={option === 1 ? 1 : 0}
							onClick={() => setOption(1)}
						>Memorizar</Option>
						<Option
							isSelected={option === 2 ? 1 : 0}
							onClick={() => setOption(2)}
						>Compreender</Option>
						<Option
							isSelected={option === 3 ? 1 : 0}
							onClick={() => setOption(3)}
						>Aplicar</Option>
						<Option
							isSelected={option === 4 ? 1 : 0}
							onClick={() => setOption(4)}
						>Analisar</Option>
						<Option
							isSelected={option === 5 ? 1 : 0}
							onClick={() => setOption(5)}
						>Avaliar</Option>
						<Option
							isSelected={option === 6 ? 1 : 0}
							onClick={() => setOption(6)}
						>Criar</Option>
					</OptionsWrapper>
					<Correction>
					<VerbsWrapper>
						{
							option === 1 &&
								remembering.map((sVerb,pos) => <Verb
																								key={sVerb+pos}
																								onClick={() => handleVerb(sVerb)}
																								isSelected={sVerb === verb ? 1 : 0}
																							>{sVerb}</Verb>)
						}
						{
							option === 2 &&
								understanding.map((sVerb,pos) => <Verb
																								key={sVerb+pos}
																								onClick={() => handleVerb(sVerb)}
																								isSelected={sVerb === verb ? 1 : 0}
																							>{sVerb}</Verb>)
						}
						{
							option === 3 &&
								applying.map((sVerb,pos) => <Verb
																								key={sVerb+pos}
																								onClick={() => handleVerb(sVerb)}
																								isSelected={sVerb === verb ? 1 : 0}
																							>{sVerb}</Verb>)
						}
						{
							option === 4 &&
								analyzing.map((sVerb,pos) => <Verb
																								key={sVerb+pos}
																								onClick={() => handleVerb(sVerb)}
																								isSelected={sVerb === verb ? 1 : 0}
																							>{sVerb}</Verb>)
						}
						{
							option === 5 &&
								evaluating.map((sVerb,pos) => <Verb
																								key={sVerb+pos}
																								onClick={() => handleVerb(sVerb)}
																								isSelected={sVerb === verb ? 1 : 0}
																							>{sVerb}</Verb>)
						}
						{
							option === 6 &&
								creating.map((sVerb,pos) => <Verb
																								key={sVerb+pos}
																								onClick={() => handleVerb(sVerb)}
																								isSelected={sVerb === verb ? 1 : 0}
																							>{sVerb}</Verb>)
						}
					</VerbsWrapper>
						
					</Correction>
				</BodyWrapper>
			</ContentWrapper>
		</Container>
	);
};

export default VerbOption;
import React from 'react';
import { Container, WrapperContent, Einstein, PhraseContainer, Text, PhraseCentrilizer } from './styles';

// import einstein from '../../assets/einstein.png';
import einstein from '../../assets/imagem_aplicacao.png';

interface Props {
	section: number;
	who: string;
	verb: string;
	goal: string;
	how: string;
}

const Header: React.FC<Props> = ({ section, who, verb, goal, how }) => {

	return (
		<Container>
			<WrapperContent>
				<Einstein src={einstein} />
				<PhraseCentrilizer>
					<PhraseContainer>
						<Text isSelected={section === 1 ? 1 : 0}>{who ? who : '[Quem]'}</Text>
						<Text isSelected={0}> será capaz </Text>
						{verb === '' ? <Text isSelected={0}>+</Text> : <Text isSelected={0}>de </Text>}
						<Text isSelected={section === 2 ? 1 : 0}>{verb ? verb.toLowerCase() + ' ' : '[verbo]'}</Text>
						{goal === '' && <Text isSelected={0}>+</Text>}
						<Text isSelected={section === 3 ? 1 : 0}>{goal ? goal.toLowerCase() + ' ' : '[objetivo]'}</Text>
						{how === '' && <Text isSelected={0}>+</Text>}
						<Text isSelected={section === 4 ? 1 : 0}>{how ? how.toLowerCase() + ' ' : '[condição]'}</Text>
					</PhraseContainer>
				</PhraseCentrilizer>
			</WrapperContent>
		</Container>
	)
};

export default Header;
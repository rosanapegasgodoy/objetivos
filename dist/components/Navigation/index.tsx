import React from 'react';
import { Container, Option, WhatSelected, WhatTitle, WhatOptions, WhatVerbGoal } from './styles';

interface Props {
	setSection: Function;
	section: number;
	who: string;
	verb: string;
	goal: string;
	how: string;
}

const Navigation: React.FC<Props> = ({ setSection, section, who, verb, goal, how }) => {

	function handleNavigation(sectionToGo: number): void {
		setSection(sectionToGo)
	}

	return (
		<Container>
			<Option
				isSelected={section === 1 ? 1 : 0}
				isSelectable={0}
				isCompleted={who !== '' ? 1 : 0}
				onClick={() => {
					if (section !== 1) handleNavigation(1);
				}}
			> QUEM? </Option>

			<span style={{ fontFamily: 'Nanum Gothic', fontSize: '25px', color: '#bbc3cb' }}>{'>'}</span>

			{(section === 2 || section === 3)
				?
				(
					<WhatSelected>
						<WhatTitle>O QUE?</WhatTitle>
						<WhatOptions>
							<WhatVerbGoal
								isSelected={section === 2 ? 1 : 0}
								isCompleted={verb !== '' ? 1 : 0}
								onClick={() => handleNavigation(2)}
							>VERBO</WhatVerbGoal>
								+
							<WhatVerbGoal
								isSelected={section === 3 ? 1 : 0}
								isCompleted={goal !== '' ? 1 : 0}
								onClick={() => handleNavigation(3)}
							>OBJETIVO</WhatVerbGoal>
						</WhatOptions>
					</WhatSelected>
				)
				:
				(
					<Option
						isSelected={(section === 2 || section === 3) ? 1 : 0}
						isSelectable={((section !== 2 && section !== 3) && who !== '' && (verb === '' || goal === '')) ? 1 : 0}
						isCompleted={(verb !== '' && goal !== '') ? 1 : 0}
						onClick={() => {
							if (section !== 2 && section !== 3 && who !== '') handleNavigation(2);
						}}
					>O QUE?</Option>
				)
			}
			<span style={{ fontFamily: 'Nanum Gothic', fontSize: '25px', color: '#bbc3cb' }}>{'>'}</span>

			<Option
				isSelected={section === 4 ? 1 : 0}
				isSelectable={(section !== 4 && (verb !== '' && goal !== '') && how === '') ? 1 : 0}
				isCompleted={how !== '' ? 1 : 0}
				onClick={() => {
					if (section !== 4 && verb !== '' && goal !== '') handleNavigation(4);
				}}
			>COMO?</Option>
			<span style={{ fontFamily: 'Nanum Gothic', fontSize: '25px', color: '#bbc3cb' }}>{'>'}</span>

			<Option
				isSelected={section === 5 ? 1 : 0}
				isSelectable={(section !== 5 && how !== '') ? 1 : 0}
				isCompleted={0}
				onClick={() => {
					if (section !== 5 && how !== '') handleNavigation(5);
				}}
			>ACABOU!</Option>

		</Container>
	)
};

export default Navigation;
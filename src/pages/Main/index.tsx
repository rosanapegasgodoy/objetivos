import React, { useState } from 'react';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import GetOption from './GetOption';
import HowOption from './HowOption';
import VerbOption from './VerbOption';
import GoalOption from './GoalOption';
import WhoOption from './WhoOption';
import GlobalStyle from '../../styles/global';
import { Container } from '../../styles';

const Main: React.FC = () => {

  const [section, setSection] = useState(1);
  const [who, setWho] = useState('');
  const [verb, setVerb] = useState('');
  const [goal, setGoal] = useState('');
  const [how, setHow] = useState('');

  return (
    <Container>
      <Header section={section} who={who} verb={verb} goal={goal} how={how} />
      <Navigation setSection={setSection} section={section} who={who} verb={verb} goal={goal} how={how} />
      {section === 1 && <WhoOption setSection={setSection} setWho={setWho} who={who}/>}
      {section === 2 && <VerbOption setSection={setSection} verb={verb} setVerb={setVerb}/>}
      {section === 3 && <GoalOption setSection={setSection} goal={goal} setGoal={setGoal}/>}
      {section === 4 && <HowOption setSection={setSection} how={how} setHow={setHow}/>}
      {section === 5 && <GetOption
        setSection={setSection}
        who={who}
        setWho={setWho}
        verb={verb}
        setVerb={setVerb}
        goal={goal}
        setGoal={setGoal}
        how={how}
        setHow={setHow}
      />}
      <GlobalStyle/>
    </Container>
  )
}

export default Main;

import React, { useEffect, useState } from 'react';
import api from '../../services_front/api';

interface Objective {
  id: string;
  email: string,
  who: string,
  verb: string,
  goal: string,
  how: string,
}

interface Props {
  location: {
    pathname: string;
  },
}

const Objectives: React.FC<Props> = (props) => {
  const [objectives, setObjectives] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    
    const getEmail = props.location.pathname.split('/')[2]
    setEmail(getEmail);

    api.get(`/objectives/${getEmail}`).then((response) => {
      setObjectives(response.data);
    });
  
  }, []);

  return (
    <>
      <div>Lista de objetivos de {email}</div>
      <br/>
      {
      objectives.length > 0
      ?
      objectives.map((objective: Objective) => (
          <ul key={objective.id}>{objective.who} será capaz de {objective.verb} {objective.goal} {objective.how}</ul>
      ))
      :
        <div>SEM DADOS</div>
    }
    </>
  )
}

export default Objectives;
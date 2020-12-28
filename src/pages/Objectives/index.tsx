import React, { useEffect, useState } from 'react';
import api from '../../services_front/api';

import GlobalStyle from '../../styles/global';

interface Objective {
  id: string,
  email: string,
  who: string,
  verb: string,
  goal: string,
  how: string,
}

const Objectives: React.FC = () => {
  const [objectives, setObjectives] = useState([]);

  useEffect(() => {
    api.get('/objectives').then(response => {
      setObjectives(response.data);
    })
  }, []);

  return (
    <>
      <div>Objectives List</div>
      {
      objectives.length > 0
      ?
      objectives.map((objective: Objective) => (
        <li>
          <ul>{objective.email}</ul>
          <ul>{objective.who} será capaz de {objective.verb} {objective.goal} {objective.how}</ul>
        </li>
      ))
      :
        <div>SEM DADOS</div>
    }
    </>
  )
}

export default Objectives;
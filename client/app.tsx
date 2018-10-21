import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Match } from './match';

const matches = [
  ['Yoshi', 'Mario'],
  ['Toad', 'Luigi'],
  ['Koopa Troopa', 'Princess'],
  ['Luigi', 'Bowser']
];

const listOfMatches = matches.map((match: [string, string], idx: number) => <Match key={`${match[0]}-${match[0]}-${idx}`} opponents={match}/>)

ReactDOM.render(listOfMatches, document.getElementById('app-root'));

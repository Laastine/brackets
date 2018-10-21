import * as React from 'react'

export interface Matchers {
  opponents: [string, string]
}

export const Match = (props: Matchers) => <div className='match-up'>
  <div>{props.opponents[0]} vs {props.opponents[1]}</div>
</div>

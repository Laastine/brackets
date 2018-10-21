import * as React from 'react'

export interface IMatchers {
  opponents: [string, string]
}

export const Match = (props: IMatchers) => <div className='match-up'>
  <div>{props.opponents[0]} vs {props.opponents[1]}</div>
</div>

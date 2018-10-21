import * as React from 'react'

export interface HelloProps { val: string }

export const Hello = (props: HelloProps) => <h1>Hello {props.val}</h1>

import * as axios from 'axios'
import * as React from 'react'
import { Match } from './match'

const serverApi: axios.AxiosInstance = axios.default.create({
  timeout: 5000, //5sec
  baseURL: 'http://localhost:4000'
})

class Matches extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      matches: []
    }
  }

  componentDidMount() {
    serverApi.get('/api/matches')
      .then((res: any) => {
        console.log('RES', res.data)
        this.setState(() => ({matches: res.data.matches}))
      })
  }

  render() {
    return <div>
      {this.state.matches.map((match: [string, string], idx: number) => <Match
        key={`${match[0]}-${match[0]}-${idx}`} opponents={match}/>)}
    </div>
  }
}

export default Matches

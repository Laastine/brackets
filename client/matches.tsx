import * as Axios from 'axios'
import * as React from 'react'
import { Match } from './match'

const serverApi: Axios.AxiosInstance = Axios.default.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000 // 5sec
})

class Matches extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      matches: []
    }
  }

  public componentDidMount() {
    serverApi.get('/api/matches')
      .then((res: Axios.AxiosResponse) => {
        this.setState(() => ({matches: res.data.matches}))
      })
  }

  public render() {
    return <div>
      {this.state.matches.map((match: [string, string], idx: number) =>
        <Match key={`${match[0]}-${match[0]}-${idx}`} opponents={match}/>)}
    </div>
  }
}

export default Matches

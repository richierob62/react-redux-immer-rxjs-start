import * as React from 'react'
import * as S from '../selectors'
import styled from 'styled-components'
import { AppState } from '../state'
import { connect } from 'react-redux'

const Layout = styled.div`
  @media only screen and (min-device-width: 768px) {
  }
  @media only screen and (min-device-width: 1024px) {
  }
`

interface STP {
  sample_prop: number
}

interface Proptypes extends STP {
  dispatch: any
}

class SampleComponent extends React.Component<Proptypes, any> {
  render() {
    return <Layout>sample body</Layout>
  }
}

const mstp = (state: AppState): STP => ({
  sample_prop: S.sample_selector(state).foo
})

export default connect(mstp)(SampleComponent)

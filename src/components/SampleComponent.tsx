import * as React from 'react'
import * as S from '../selectors'
import styled from 'styled-components'
import { Action } from '../actions/types'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppState } from '../interfaces'

const Layout = styled.div`
  @media only screen and (min-device-width: 768px) {
  }
  @media only screen and (min-device-width: 1024px) {
  }
`

interface STP {
  sample_prop: number
}

interface OwnProps {}

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

const mdtp = (dispatch: Dispatch<Action>, props: OwnProps) => ({})

export default connect(
  mstp,
  mdtp
)(SampleComponent)

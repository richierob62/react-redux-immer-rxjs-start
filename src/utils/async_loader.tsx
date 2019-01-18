import * as React from 'react'
import Busy from '../components/Busy'

const asyncLoader = (importFunction: () => any) => {
  class AsyncComponent extends React.Component<any, any> {
    timer: any

    constructor(props: any) {
      super(props)

      this.state = {
        component: null,
        busy: null
      }
    }

    async componentDidMount() {
      this.timer = setTimeout(
        () =>
          this.setState({
            busy: <Busy />
          }),
        1000
      )

      const { default: component } = await importFunction()

      this.setState({
        component: component
      })
    }

    componentWillUnmount() {
      clearInterval(this.timer)
    }

    render() {
      const Comp = this.state.component
      return Comp ? <Comp {...this.props} /> : this.state.busy
    }
  }

  return AsyncComponent
}

export default asyncLoader

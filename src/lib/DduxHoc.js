import React, { Component } from 'react';
import Ddux from './Ddux';
const DduxHOC = (WrappedComponent)=>{
  return class DduxHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        updating: 0
      }
      this.init()
    }

    init = ()=>{
      this.updateState = this.updateState.bind(this)
      Ddux.init(this.updateState)
    }

    updateState = () => {
      this.setState({updating: 1})
    }

    render() {
      return <WrappedComponent />;
    }
  }
}


export default DduxHOC
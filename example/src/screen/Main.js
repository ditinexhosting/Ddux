import React, { Component } from 'react';
import { Ddux, DduxHOC } from 'ddux';

const initialState = {
  value : 0
}

Ddux.initDdux(initialState)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: 10
    };
  }

  componentDidMount(){
    Ddux.setMethod('changeParent',this.changeParent.bind(this))
  }

  componentWillUnmount() {
    Ddux.unsetMethod('changeParent')
  }

  changeParent = (data=null)=>{
    if(data)
      this.setState({parent: data})
    else
      this.setState({parent: this.state.parent - 1})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            Parent Change <code style={{color: '#FF0000', fontSize: 35}}>{this.state.parent}</code> from grand child method call.
          </div>
          <div>
            Parent Change <code style={{color: '#FF0000', fontSize: 35}}>{Ddux.get('value')}</code> from child data change.
          </div>
          <ChildComponent />
          <GrandChildComponent />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const main = DduxHOC(Main)
export { main as Main }



class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }

  componentWillUnmount() {
  }

  render() {
    const value = Ddux.get('value')
    return (
      <div>
        Child Component <button onClick={()=>Ddux.update('value',value+1)}>On Click</button> change value in parent.
      </div>
    );
  }
}



class GrandChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        Grand Child <button onClick={()=>Ddux.callMethod('changeParent')}>On Click</button> Call method. <br />
        Grand Child <button onClick={()=>Ddux.callMethod('changeParent',100)}>On Click</button> Call method with parameter.
      </div>
    );
  }
}

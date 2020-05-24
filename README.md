# Ddux - Minified React State Manager

[![npm](https://img.shields.io/npm/v/ddux.svg)](https://www.npmjs.com/package/ddux)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/ddux.svg)](https://bundlephobia.com/result?p=ddux)
[![License](https://img.shields.io/:license-MIT-blue.svg)](./LICENSE)
[![Total Downloads](https://badgen.net/npm/dt/ddux)](https://www.npmjs.com/package/ddux)

Avoid the hassle of going through provider consumer stuff of state manager such as Redux or Flux. Ddux is a minified state manager for React JS and React Native. It can be use with **single line of code** avoiding all bombarding complexity of usual state manager. Let's use this light weight package of only 4kb using old school method.

## Why to use DDUX ?
Ddux is a minified library with extensive feature. It is around only 4KB. It uses old school method of static class which won't affect performance of your application.

It allows to handle both state values and global values from any part or component of the application.

Only 1 liner code is enough and no other hassle of creating store and dispatching.

It allows to call methods of parent element (or vice versa) from within multilevel grand-child. It saves from the hassle of  passing the method as props on each level.

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
npm install ddux
```
## Pre-usage Setup
- Import Ddux and DduxHOC in your main root file.
```js
import { Ddux, DduxHOC } from 'ddux'
```
- Initialize all the required state variables and global variables. 

```js
const initialState = { value : 0 }
Ddux.initDdux(initialState)
```
- Wrap the main component with DduxHOC higher order component.

```js
const main = DduxHOC(Main)
export { main as Main }
```
Refer to the below demo snippet of main file. Here my main component is named as *Main* and file *Main.js*.

```js
import React, { Component } from 'react';
import { Ddux, DduxHOC } from 'ddux'

/*
 * Initialize all states or global variables you need
 */
const initialState = { stateValue : 0, globalValue: 1 }
Ddux.initDdux(initialState)

class Main extends Component {
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
      <div>My clild components here.</div>
    );
  }
}

const main = DduxHOC(Main)
export { main as Main }
```
## Usage
- Import Ddux and get the initialized state value or global variable.
```js
Ddux.get('stateValue')
```
- Update state value. It will re-render the screen
```js
Ddux.update('stateValue',10)
```
- Update global value. It don't require re-rendering of screen
```js
Ddux.update('globalValue',10,false)
```
- Set a method in parent component, globally accessible from any child or grand-child component or vice-versa
```js
Ddux.setMethod('methodName',methodValue)
```
Please note that the method in the parent component should be bind with this. Refer the below snippet :
```js
  componentDidMount(){
    Ddux.setMethod('changeParent',this.changeParent.bind(this))
  }

  changeParent = (value)=>{
      this.setState({parentValue: value})
  }
```
- Call the globally accessible method from inside grand-child component or vice-versa
```js
Ddux.callMethod('changeParent',100)
```

## Demo
A full [Ddux Demo](https://github.com/ditinexhosting/Ddux-Demo-Project) project is available to test and implement all the features of Ddux. 

## License
[MIT](https://choosealicense.com/licenses/mit/)

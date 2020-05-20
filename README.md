# Ddux - Minified React State Manager

[![npm](https://img.shields.io/npm/v/ddux.svg)](https://www.npmjs.com/package/ddux)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/ddux.svg)](https://bundlephobia.com/result?p=ddux)
[![License](https://img.shields.io/:license-MIT-blue.svg)](./LICENSE)
[![Total Downloads](https://badgen.net/npm/dt/ddux)](https://www.npmjs.com/package/ddux)

Avoid the hassle of going through provider consumer stuff of state manager such as Redux or Flux. Ddux is a minified state manager for React JS and React Native. It can be use with **single line of code** avoiding all bombarding complexity of usual state manager. Let's use this light weight package of only 4kb using old school method.


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

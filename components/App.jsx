import React, { Component } from 'react';
import Form from './Form';
import List from './List'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
  }

  handleAdd(e){
    console.log(e.target.title.value);
    e.preventDefault();
    }
  render(){
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Guest List App</h1>
        <Form />
        <div className="siimple-rule"></div>
        <List />
      </div>
    );
  }
}
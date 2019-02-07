import React, { Component } from 'react';
import Songlist from './Songlist'
import Songdetail from './Songdetail'
// import actions from '../actions';

class App extends Component {
  render() {
    return (
      <div className="ui container grid">
	      <div className="ui row">
	      	<div className="column eight wide"> <Songlist /> </div>
	      	<div className="column eight wide"> <Songdetail /> </div>
	      </div>
       
      </div>
    );
  }
}

export default App;

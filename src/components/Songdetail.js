import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from '../actions';

// class Songdetail extends Component {
//   render() {
//     return (
//       <div className="ui container grid">
// 	      <div className="ui row">
// 	      	<div className="column eight wide"> <Songlist /> </div>
// 	      	<div className="column four wide"> test </div>
// 	      </div>
       
//       </div>
//     );
//   }
// }

const Songdetail = ({song}) => {
  if(!song) {
    return <h1>select a Song</h1>
  }
  return <h1>song detail <br/>name: {song.title} <br/> duration: {song.duration} </h1> ;
}

const mapStateToProps = state => {
  return {
    song: state.selectedSong 
  }
}

export default connect(mapStateToProps)(Songdetail);

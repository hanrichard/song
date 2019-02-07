import React, { Component } from 'react';
import { connect } from 'react-redux';



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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
// import actions from '../actions';

class Songlist extends Component {	
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}> 
					<div className="right  floated content">
						<button 
							onClick={()=> this.props.selectSong(song)}
							className="ui primary button">
							select
						</button>
					</div>

					<div className="content">{ song.title } </div>
				</div>
			)
		});
	}


  render() {
    return (
      <div className="ui divided list">
        test song list {
        	this.renderList()
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
	console.log(state)
	return {
		songs: state.songs 
	}
}

export default connect(mapStateToProps, {
	selectSong: selectSong
})(Songlist);















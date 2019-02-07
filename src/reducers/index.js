import {combineReducers} from 'redux';

const songsReducer = () => {
	return  [
		{title: 'abc', duration: '4:05'},
		{title: 'cdb', duration: '4:05'},
		{title: 'safdfds', duration: '4:05'},
		{title: 'dfsdfds', duration: '4:05'},
	]
}

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
})
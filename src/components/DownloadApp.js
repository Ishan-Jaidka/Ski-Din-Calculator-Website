import React, { Component } from 'react'
import androidDude from './images/android-download.png';

class DownloadApp extends Component {
	render() {
		return (
			<div className='App-download'>
				<a href="https://play.google.com/store/apps/details?id=com.ski.dincalc&hl=en_US&gl=US">
					<img src={androidDude} height='40vmin' alt="Android App" />
				</a>
			</div>
			
		)
	}
}

export default DownloadApp
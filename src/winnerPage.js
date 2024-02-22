import React from 'react';
import useSound from 'use-sound';
import clickSound from './audio/btnClickSound.wav';
import hoverSound from './audio/hoverSound.mp3';

export default function WinnerPage(props) {
	const [playClickSound] = useSound(clickSound);
	const [playHoverSound] = useSound(hoverSound, { volume: 0.6 });

	const handleGameOver = () => {
		playClickSound();
		document.getElementById('winPageId').style.display = 'none';
		document.getElementById('homePage').style.display = 'flex';
	}
	return (
		<div className="winPage" id="winPageId">
			<h1>Hurrayy!!...</h1>
			<h1>The winner is:</h1>
			<h1 style={{fontSize: "350%"}}>Player {props.winner + 1}</h1>

			<button onMouseOver={playHoverSound}onClick={handleGameOver}>Back To Start Page</button>
		</div>
	);
}
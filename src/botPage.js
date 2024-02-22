import React from 'react';
import useSound from 'use-sound';
import clickSound from './audio/btnClickSound.wav';

export default function BotPage(){
	const [playClickSound] = useSound(clickSound);

	const goBack = () => {
		document.getElementById('botPage').style.display = 'none';
		document.getElementById('homePage').style.display = 'flex';
		playClickSound();
	}



	return (
		<div id="botPage" className="vsBotPage">
			<button onClick={goBack} id="goBackBtn">Go Back</button>
		</div>
	);
}
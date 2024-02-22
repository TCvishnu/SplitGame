import React from 'react';


import multiplayerImg from './images/multiplayer.png';
import robotImg from './images/robot.png';
import infoImg from './images/information.png';
import useSound from 'use-sound';
import clickSound from './audio/btnClickSound.wav';
import hoverSound from './audio/hoverSound.mp3';

export default function StartPage(){
	const [playClickSound] = useSound(clickSound);
	const [playHoverSound] = useSound(hoverSound, {volume: 0.6});

	

	const onClickInfoBtn = () => {
		document.getElementById('homePage').style.display = 'none';
		document.getElementById('pageInfo').style.display = 'flex';
		playClickSound();
	}

	const onClickMultiplayer = () => {
		document.getElementById('homePage').style.display = 'none';
		document.getElementById('multiPage').style.display = 'flex';
		playClickSound();
	}

	const onClickBotBtn = () => {
		document.getElementById('homePage').style.display = 'none';
		document.getElementById('botPage').style.display = 'flex';
		playClickSound();
	}

	return (
		<div className="startingPage" id="homePage">
			<h1>Split</h1>

			<div className="playOptionsDiv">
				<div className="OptionsDiv">
					
					<button onClick={onClickMultiplayer} onMouseOver={playHoverSound}>
						<img src={multiplayerImg} alt="no pic" width="100%" height="100%"/>
					</button>

					<h3>: Multiplayer</h3>
				</div>

				<div className="OptionsDiv">
					
					
					<button onMouseOver={playHoverSound} onClick={onClickBotBtn}>
						<img src={robotImg} alt="no pic" width="100%" height="100%"/>
					</button>

					<h3>: Vs Bot</h3>
				</div>

				<div className="OptionsDiv">
					<button  onMouseOver={playHoverSound} onClick={onClickInfoBtn}>
						<img src={infoImg} alt="no pic" width="100%" height="100%"/>
					</button>
					<h3>: Info </h3>
				</div>
				
			</div>

		</div>

	);
}
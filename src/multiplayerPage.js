import React from 'react';
import useSound from 'use-sound';
import clickSound from './audio/btnClickSound.wav';
import winSound from './audio/winSound.mp3';

import {useState, useEffect} from 'react';

import finger1 from './images/1finger.png';
import finger0 from './images/0fingers.png';
import finger2 from './images/2fingers.png';
import finger3 from './images/3fingers.png';
import finger4 from './images/4fingers.png';




import WinnerPage from './winnerPage';

export default function MultiplayerPage(){
	const [winner, setWinner] = useState('');
	const [playClickSound] = useSound(clickSound, {volume : 1});
	const [playWinSound] = useSound(winSound);

	const [currentPlayer, setCurrentPlayer] = useState(0);

	const [left1, setLeft1] = useState(1);
  const [right1, setRight1] = useState(1);
  const [left2, setLeft2] = useState(1);
  const [right2, setRight2] = useState(1);

  const [para1, setPara1] = useState('');
  const [para2, setPara2] = useState('');

  const [playHand, setPlayHand] = useState('');
  const [hitHand, setHitHand] = useState('');

  const fingerImgs = [0, finger1, finger2, finger3, finger4, finger0];

  const left1Clicked = ()=> {
  	playClickSound();
  	if (!currentPlayer){
  		setPara1('You chose your left hand');
  		setPlayHand('left');
  	} else {
  		setPara1('You chose opponent\'s left hand');
  		setHitHand('left');
  	}
  }

  const right1Clicked = () => {
  	playClickSound();
  	if (!currentPlayer){
  		setPara1('You chose your right hand');
  		setPlayHand('right');
  	} else {
  		setPara1('You chose opponent\'s right hand');
  		setHitHand('right');
  	}
  }

  const left2Clicked = ()=> {
  	playClickSound();
  	if (!currentPlayer){
  		setPara2('You chose opponent\'s left hand');
  		setHitHand('left');
  	} else {
  		setPara2('You chose your left hand');
  		setPlayHand('left');
  	}
  }

  const right2Clicked = () => {
  	playClickSound();
  	if (!currentPlayer){
  		setPara2('You chose opponent\'s right hand');
  		setHitHand('right');
  	} else {
  		setPara2('You chose your right hand');
  		setPlayHand('right');
  	}
  }

  const handlePlay = () => {
  	playClickSound();
  	if (!currentPlayer){
  		if (playHand === 'left'){
  			if (hitHand === 'left'){
  				setLeft2(left2 + left1);
  			} else {
  				setRight2(right2 + left1);
  			}
  		} else {
  			if (hitHand === 'left'){
  				setLeft2(left2 + right1);
  			} else {
  				setRight2(right2 + right1);
  			}
  		}
  		setCurrentPlayer(1);
  	} else {
  		if (playHand === 'left'){
  			if (hitHand === 'left'){
  				setLeft1(left1 + left2);
  			} else {
  				setRight1(right1 + left2);
  			}
  		} else {
  			if (hitHand === 'left'){
  				setLeft1(left1 + right2);
  			} else {
  				setRight1(right1 + right2);
  			}
  		}
  		setCurrentPlayer(0);
  	}
  }

  const handleSplit = () => {
  	playClickSound();
  	if (!currentPlayer){
  		if (left1 === 5){
  			setLeft1(right1 / 2);
  			setRight1(right1 / 2);
  			document.getElementById("l1").disabled = false;
  		} else {
  			setLeft1(left1 / 2);
  			setRight1(left1 / 2);
  			document.getElementById("r1").disabled = false;
  		}

  		setCurrentPlayer(1);

  	} else {
  		if (left2 === 5){
  			setLeft2(right2 / 2);
  			setRight2(right2 / 2);
  			document.getElementById('l2').disabled = false;
  		} else {
  			setRight2(left2 / 2);
  			setLeft2(left2 / 2);
  			document.getElementById('r2').disabled = false;
  		}

  		setCurrentPlayer(0);
  	}
  }

	const goBack = () => {
		document.getElementById('multiPage').style.display = 'none';
		document.getElementById('homePage').style.display = 'flex';
		playClickSound();
	}

	useEffect( ()=> {
  	if (!currentPlayer){
  		if (left1 === 5 && right1 % 2 === 0){
  			document.getElementById('splitBtn').disabled = false;
  		} else if (right1 === 5 && left1 % 2 === 0){
  			document.getElementById('splitBtn').disabled = false;
  		} else {
  			document.getElementById('splitBtn').disabled = true;
  		}
  	} else {
  		if (left2 === 5 && right2 % 2 === 0){
  			document.getElementById('splitBtn').disabled = false;
  		} else if (right2 === 5 && left2 % 2 === 0) {
  			document.getElementById('splitBtn').disabled = false;
  		} else {
  			document.getElementById('splitBtn').disabled = true;
  		}
  	}
  }
  ,[left1, right1, left2, right2]);

  useEffect( () => {

  	if (left1 === 5){
  		document.getElementById('l1').disabled = true;
  	} else if (left1 > 5) {
  		setLeft1(left1 - 5);
  	}

  	if (right1 === 5){
  		document.getElementById('r1').disabled = true;
  	} else if (right1 > 5) {
  		setRight1(right1 - 5);
  	}

  	if (left2 === 5){
  		document.getElementById('l2').disabled = true;
  	} else if (left2 > 5) {
  		setLeft2(left2 - 5);
  	}

  	if (right2 === 5){
  		document.getElementById('r2').disabled = true;
  	} else if (right2 > 5) {
  		setRight2(right2 - 5);
  	}

  }, [left1, right1, left2, right2] );

  useEffect( () => {
  	document.getElementById('playBtn').disabled = true;
  	setPara1('');
  	setPara2('');
  }
  ,[currentPlayer]
  );

  useEffect( () => {
  		if (para1.length > 0 && para2.length > 0){
  			document.getElementById('playBtn').disabled = false;
  		} else {
  			document.getElementById('playBtn').disabled = true;
  		}
  	}
  , [para1, para2]);

  useEffect( () => {
  	if (left1 === 5 && right1 === 5 || left2 === 5 && right2 === 5){
  		document.getElementById('multiPage').style.display = 'none';
  		document.getElementById('winPageId').style.display = 'flex';

  		playWinSound();

  		setWinner(!currentPlayer);

  		setLeft1(1);
  		setLeft2(1);
  		setRight1(1);
  		setRight2(1);
  		setPara1('');
  		setPara2('');
  		setPlayHand('');
  		setHitHand('');
  		setCurrentPlayer(0);

  		document.getElementById('l1').disabled = false;

  		document.getElementById('r1').disabled = false;

  		document.getElementById('l2').disabled = false;

  		document.getElementById('r2').disabled = false;
  	}
  }
  ,[left1, right1, left2, right2]);

	return (
		<div>
		<div className="multiplayerPage" id="multiPage">

			<h1 id="multiHead">Player {currentPlayer+1} Plays:</h1>
			<div className="playerScreen">

				<div className="player">
					<h1>Player 1</h1>

					<div className="handsDiv">
						<p>Left: </p>
						<button id="l1" onClick={left1Clicked}>
						<img src={fingerImgs[left1]} width="100%" height="100%"/>
						</button>

						<p>Right: </p>

						<button id="r1" onClick={right1Clicked}>
							<img src={fingerImgs[right1]} width="100%" height="100%"/>
						</button>

					</div>

					<p className="discriptionP">{para1}</p>

				</div>

				<div id="midLine"></div>

				<div className="player">
					<h1>Player 2</h1>

					<div className="handsDiv">
						<p>Left: </p>

						<button id="l2" onClick={left2Clicked}>
							<img src={fingerImgs[left2]} width="100%" height="100%"/>
						</button>

						<p>Right: </p>
						<button id="r2" onClick={right2Clicked}>
						<img src={fingerImgs[right2]} width="100%" height="100%"/>
						</button>

					</div>

					<p className="discriptionP">{para2}</p>
				</div>

			</div>
			<button className="miscBtns" id="splitBtn" onClick={handleSplit}>
			<b>Split</b></button>
			<button className="miscBtns" id="playBtn" onClick={handlePlay}>
			<b>Play</b></button>
			<button className="miscBtns" id="goback" onClick={goBack}>
			<b>Go Back</b></button>

		</div>
		<WinnerPage winner={winner}/>
		</div>
	);
}
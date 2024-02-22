import React from 'react';
import useSound from 'use-sound';
import clickSound from './audio/btnClickSound.wav';

export default function InfoPage(){
	const [playClickSound] = useSound(clickSound);

	const goBack = () => {
		document.getElementById('pageInfo').style.display = 'none';
		document.getElementById('homePage').style.display = 'flex';
		playClickSound();
	}

	return (
		<div className="infoPage" id="pageInfo">
			<h1 id="Hinfo">Info:</h1>
			<button title="Go back to Start Page"onClick={goBack}> <b>{"<"}</b> </button>
			<div>
				<h1 id="splitHeader">Split</h1>
				<ul>
					<li>There are two Players.</li>
					<li>Each have 2 hands.</li>
					<li>Either player chooses 1 hand to play with and their opponent's hand to hit.</li>
					<li>Number of fingers represent the score on their hands.</li>
					<li>Once a hand reaches a score of 5, then it becomes unusable.</li>
					<li>When you only have 1 hand and the other has an even number <br/>
						then you can split your score onto both the hands.</li>
					<li>You lose when both your hands become unusable.</li>
				</ul>
				<p>Vs Bot: under development!!</p>
			</div>
			
		</div>
	);
}
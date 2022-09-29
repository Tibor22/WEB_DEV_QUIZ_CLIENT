import './singlePlayer.css';
import Categories from '../Categories/Categories.js';

export default function SinglePlayer() {
	return (
		<div className='singlePlayer-container'>
			<h1 className='singlePlayer-container__header'>SINGLE PLAY</h1>
			<div className='singlePlayer-container__categories'>
				<h2 className='singlePlayer-container__categories--header'></h2>
				<div className='singlePlayer-container__categories--container'>
					<Categories />
				</div>
			</div>
			<div className='singlePlayer-container__start-btn-container'>
				<button className='singlePlayer-container__start-btn offset'>
					START GAME
				</button>
			</div>

			<div className='singlePlayer-container__leaderboard'></div>
		</div>
	);
}

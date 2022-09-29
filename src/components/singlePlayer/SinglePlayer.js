import './singlePlayer.css';
import Categories from '../Categories/Categories.js';

export default function SinglePlayer() {
	return (
		<div className='singlePlayer-container'>
			<h1 className='singlePlayer-container__header'></h1>
			<div className='singlePlayer-container__categories'>
				<h2 className='singlePlayer-container__categories--header'></h2>
				<h2 className='singlePlayer-container__categories--container'>
					<Categories />
				</h2>
			</div>
			<div className='singlePlayer-container__start-btn-container'>
				<button className='singlePlayer-container__start-btn'></button>
			</div>

			<div className='singlePlayer-container__leaderboard'></div>
		</div>
	);
}

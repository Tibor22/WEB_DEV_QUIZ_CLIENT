import './singlePlayer.css';
import Categories from '../Categories/Categories.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function SinglePlayer() {
	const [users, setUsers] = useState([]);
	const [category, setCategory] = useState('');
	const url = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const getUsers = async () => {
			const data = await axios.get(`${url}/users`);
			setUsers(data.data.data);
		};

		getUsers();
	}, []);
	return (
		<div className='singlePlayer-container'>
			<h1 className='singlePlayer-container__header'>SINGLE PLAY</h1>
			<div className='singlePlayer-container__categories'>
				<h2 className='singlePlayer-container__categories--header'>
					Please choose a category:
				</h2>
				<div className='singlePlayer-container__categories--container'>
					<Categories setCategory={setCategory} category={category} />
				</div>
			</div>
			<div className='singlePlayer-container__start-btn-container'>
				<Link
					to='/single-play'
					state={{ category: category }}
					className={`singlePlayer-container__start-btn offset ${
						category ? '' : 'noClick'
					}`}
				>
					START GAME
				</Link>
			</div>

			<div className='singlePlayer-container__leaderboard'>
				<h3 className='singlePlayer-container__leaderboard--header'>
					LEADERBOARD
				</h3>
				<table className='singlePlayer-container__leaderboard--table'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Wins</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, i) => {
							return (
								<tr key={i}>
									<td>{user.name.split(' ')[0]}</td>
									<td>{user.wins}</td>
									<td>{user.score}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

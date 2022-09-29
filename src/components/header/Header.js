import './header.css';
import logo from '../../assets/logo2.png';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
	const [state, dispatch] = useContext(UserContext);
	const url = process.env.REACT_APP_API_URL;
	const navigate = useNavigate();
	async function logout() {
		try {
			const data = await axios(`${url}/auth/logout`, {
				withCredentials: true,
			});
		} catch (err) {
			console.log(err);
		}

		dispatch({ type: 'LOGOUT', payload: {} });
		navigate('/');
	}

	return (
		<nav className='header-outer-container'>
			{state.isLoggedIn && (
				<div className='header-container-flex'>
					<button onClick={logout} className='logout'>
						Logout
					</button>
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
					<div className='user-details'>
						<div className='username'>{state.user.name}</div>
						{state.user.img && (
							<img
								referrerPolicy='no-referrer'
								className='userImg'
								src={state.user.img}
								alt=''
							></img>
						)}
						{!state.user.img && (
							<img
								className='userImg'
								src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
								alt='Girl in a jacket'
							></img>
						)}
					</div>
				</div>
			)}
			{!state.isLoggedIn && (
				<div className='header-container'>
					<img src={logo} alt='' />
				</div>
			)}
		</nav>
	);
}

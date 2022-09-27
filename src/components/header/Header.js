import './header.css';
import logo from '../../assets/logo2.png';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

export default function Header() {
	const [state, data] = useContext(UserContext);

	return (
		<nav className='header-outer-container'>
			{state.isLoggedIn && (
				<div className='header-container-flex'>
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
					<div className='user-details'>
						<div className='username'>{state.user.name}</div>
						{state.user.img && (
							<img
								className='userImg'
								crossorigin='anonymous'
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

import './header.css';
import logo from '../../assets/logo2.png';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

export default function Header() {
	const [state, data] = useContext(UserContext);

	return (
		<div className='header-outer-container'>
			{state.isLoggedIn && (
				<div className='header-container-flex'>
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
					<div className='username'>Username</div>
				</div>
			)}
			{!state.isLoggedIn && (
				<div className='header-container'>
					<img src={logo} alt='' />
				</div>
			)}
		</div>
	);
}

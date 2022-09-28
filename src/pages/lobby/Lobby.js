import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './lobby.css';
export default function Lobby() {
	const url = process.env.REACT_APP_API_URL;
	const [state, dispatch] = useContext(UserContext);

	useEffect(() => {
		async function fetchUser() {
			if (!state.isLoggedIn) {
				const data = await axios(url + '/user', { withCredentials: true });

				dispatch({ type: 'LOGIN', payload: { ...data.data.data } });
			}
		}
		fetchUser();
	}, []);
	return (
		<div className='lobby-outer-container'>
			<Header />
			<div className='lobby-container'></div>
			<Footer />
		</div>
	);
}

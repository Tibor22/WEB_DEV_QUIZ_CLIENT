import './signIn.css';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
export default function SignIn() {
	const [state, dispatch] = useContext(UserContext);
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		dispatch({
			type: 'LOGIN',
			payload: {
				name: 'Guest',
				type: 'guest',
				isAuthenticated: false,
			},
		});
		navigate('/lobby');
	};

	return (
		<div className='signIn-outer-container'>
			<Header />
			<div className='signIn-container'>
				{!state.isLoggedIn && (
					<div className='signIn-component'>
						<h2 className='signIn-component__header'>SIGN IN</h2>
						<p className='signIn-component__legal'>
							By using Google to Log in, your personal details are safe. We do
							not gain access to your password or private information.
						</p>
						<div className='signIn-component__login-btns'>
							<a
								href='http://localhost:4000/auth/google'
								className='google-btn sign-in-btn'
							>
								<div className='google-icon'>
									{' '}
									<FcGoogle size='2.3rem' />
								</div>

								<span className='google-text'>Sign in with Google</span>
							</a>

							<div className='divider'>OR</div>
							<button onClick={handleLogin} className='sign-in-btn'>
								Sign in as guest
							</button>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}

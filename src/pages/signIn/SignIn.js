import './signIn.css';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
export default function SignIn() {
	const url = process.env.REACT_APP_API_URL;
	const handleLogin = async (e) => {
		if (e.target.closest('.sign-in-btn').classList.contains('google-btn')) {
			const data = await axios(url + '/auth/google');
			console.log(data);
		} else {
			console.log('Sign In as guest');
		}
	};

	return (
		<div className='signIn-outer-container'>
			<div className='signIn-container'>
				<div className='signIn-component'>
					<h2 className='signIn-component__header'>SIGN IN</h2>
					<p className='signIn-component__legal'>
						By using Google to Log in, your personal details are safe. We do not
						gain access to your password or private information.
					</p>
					<div className='signIn-component__login-btns'>
						<button onClick={handleLogin} className='google-btn sign-in-btn'>
							<div className='google-icon'>
								{' '}
								<FcGoogle size='2.3rem' />
							</div>

							<span className='google-text'>Sign in with Google</span>
						</button>
						<div className='divider'>OR</div>
						<button onClick={handleLogin} className='sign-in-btn'>
							Sign in as guest
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

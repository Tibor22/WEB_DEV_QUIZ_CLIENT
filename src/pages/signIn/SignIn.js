import './signIn.css';
import { FcGoogle } from 'react-icons/fc';
export default function SignIn() {
	const styles = {
		marginRight: '2rem',
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
						<button className='google-btn sign-in-btn'>
							<div className='google-icon'>
								{' '}
								<FcGoogle size='2.3rem' styles={styles} />
							</div>

							<span className='google-text'>Sign in with Google</span>
						</button>
						<div className='divider'>OR</div>
						<button className='sign-in-btn'>Sign in as guest</button>
					</div>
				</div>
			</div>
		</div>
	);
}

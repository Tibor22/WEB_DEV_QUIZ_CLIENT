import './footer.css';
import { BsGithub } from 'react-icons/bs';

export default function Footer() {
	return (
		<>
			<div className='peaks-container'></div>
			<div className='footer-outer-container'>
				<div className='footer-container'>
					<div className='footer-container__reference'>
						<a
							className='github-link'
							href='https://github.com/Tibor22/WEB_DEV_QUIZ_CLIENT'
							target='_blank'
						>
							<BsGithub color='white' size='3.5rem' />
						</a>
						Made with love by{' '}
						<a
							href='https://www.linkedin.com/in/tibor-toth-53690b227/'
							target='_blank'
							className='creator-link'
						>
							{' '}
							Tibor Toth{' '}
						</a>{' '}
						and{' '}
						<a
							href='https://www.linkedin.com/in/daniel-northcott-750107204/'
							target='_blank'
							className='creator-link'
						>
							{' '}
							Dan Northcott{' '}
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

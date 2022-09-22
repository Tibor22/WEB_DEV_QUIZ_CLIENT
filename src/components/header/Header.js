import './header.css';
import logo from '../../assets/logo2.png';

export default function Header() {
	return (
		<div className='header-outer-container'>
			<div className='header-container-flex'>
				<div className='logo'>
					<img src={logo} alt='' />
				</div>
				<div className='username'>Username</div>
			</div>
			<div className='header-container'>Logo</div>
		</div>
	);
}

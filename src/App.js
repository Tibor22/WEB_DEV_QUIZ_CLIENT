import './App.css';
import Header from './components/header/Header.js';
import SignIn from './pages/signIn/SignIn.js';
import Footer from './components/footer/Footer.js';

function App() {
	return (
		<div className='App'>
			<Header />
			<SignIn />
			<Footer />
		</div>
	);
}

export default App;

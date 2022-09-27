import './App.css';

import SignIn from './pages/signIn/SignIn.js';
import Lobby from './pages/lobby/Lobby.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <SignIn />,
	},
	{
		path: '/lobby',
		element: <Lobby />,
	},
]);

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

import NavBar from './Components/NavBar/NavBar.jsx';
import LoginModal from './Components/Login/LoginModal.jsx';

import Feed from './Components/Feed/Feed.jsx';
import { Col, Row } from './Components/Bootstrap/Bootstrap.jsx';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const USER_NAME = 'username';

function App() {
	const [currentUser, setCurrentUser] = useState(localStorage.getItem(USER_NAME)); // leave empty string to trigger login modal
	// setCurrentUser(localStorage.getItem(USER_NAME));

	function handleCurrentUser(username) {
		localStorage.setItem(USER_NAME, username);
		setCurrentUser(username);
	}

	return (
		<>
			{!currentUser ? (
				<LoginModal currentUser={currentUser} setCurrentUser={handleCurrentUser} />
			) : null}

			<div className='container'>
				<Row className='justify-content-center'>
					<Col width='3'>
						<NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
					</Col>
					<Col width='6' className='border border-top-0 border-secondary p-0'>
						<Feed currentUser={currentUser} />
					</Col>
				</Row>
			</div>
		</>
	);
}

export default App;

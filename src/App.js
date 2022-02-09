import CreatePost from './Components/Feed/CreatePost/CreatePost.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Feed from './Components/Feed/Feed.jsx';
import { Col, Row } from './Components/Bootstrap/Bootstrap.jsx';
import { useState } from 'react';
import LoginModal from './Components/Login/LoginModal.jsx';

function App() {
	const [currentUser, setCurrentUser] = useState('Danimal'); // leave empty string to trigger login modal
	console.log(currentUser);

	return (
		<>
			{!currentUser ? (
				<LoginModal currentUser={currentUser} setCurrentUser={setCurrentUser} />
			) : null}

			<div className='container'>
				<Row className='justify-content-center'>
					<Col width='3'>
						<NavBar setCurrentUser={setCurrentUser} />
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

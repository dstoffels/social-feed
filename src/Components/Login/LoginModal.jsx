import { useState } from 'react';
import { Button } from '../Bootstrap/Bootstrap.jsx';
import './Login.css';

const LoginModal = props => {
	const [userName, setUsername] = useState('');

	function handleUsername(e) {
		setUsername(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.setCurrentUser(userName);
		setUsername('');
	}

	return props.currentUser ? (
		<></>
	) : (
		<div className='modal-overlay justify-content-center align-middle'>
			<div className='modal-container'>
				<div className='login-modal'>
					<h4>Please login to continue</h4>
					<form onSubmit={handleSubmit}>
						<label>Username</label>
						<input
							required
							autoFocus
							className='form-control mb-3'
							type='text'
							onChange={handleUsername}
							value={userName}
						/>
						<Button>Login</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginModal;

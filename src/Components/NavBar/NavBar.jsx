import { FeedIcon, LogoutIcon } from '../Bootstrap/icons.jsx';
import './NavBar.css';

const NavBar = props => {
	const { currentUser, setCurrentUser } = props;
	function handleLogOut(e) {
		e.preventDefault();
		setCurrentUser('');
	}
	return (
		<div className=' position-fixed mw-100'>
			<h5 className='sidebar-title'>{currentUser}</h5>
			<div className='nav-item'>
				<a>
					<FeedIcon />
					<span>Feed</span>
				</a>
			</div>
			<div className='nav-item'>
				<a href='' onClick={handleLogOut}>
					<LogoutIcon />
					Log Out
				</a>
			</div>
		</div>
	);
};

export default NavBar;

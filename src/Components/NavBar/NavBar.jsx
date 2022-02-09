import { FeedIcon, LogoutIcon } from '../Bootstrap/icons.jsx';
import './NavBar.css';

const NavBar = props => {
	function handleLogOut(e) {
		e.preventDefault();
		props.setCurrentUser('');
	}
	return (
		<div className=' position-fixed mw-100'>
			<h4 className='sidebar-title'>Gripe</h4>
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
			<p className='text-muted'>notifications?</p>
			<p className='text-muted'>messages?</p>
			<p className='text-muted'>settings?</p>
			<p className='text-muted'>light/darkmode toggle</p>
		</div>
	);
};

export default NavBar;

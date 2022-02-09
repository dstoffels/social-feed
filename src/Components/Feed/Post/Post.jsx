import { useEffect, useState } from 'react';
import {
	ThumbsDownFill,
	ThumbsDownOutline,
	ThumbsUpFill,
	ThumbsUpOutline,
} from '../../Bootstrap/icons.jsx';
import './Post.css';

const Post = props => {
	const { currentUser, username, content, date = 'date' } = props;

	const [likedBy, setLikedBy] = useState([]);
	const [dislikedBy, setDislikedBy] = useState([]);

	const likeBtn = () => {
		if (!likedBy.includes(currentUser)) {
			return <ThumbsUpOutline fill='green' />;
		} else {
			return <ThumbsUpFill fill='green' />;
		}
	};

	const dislikeBtn = () =>
		!dislikedBy.includes(currentUser) ? (
			<ThumbsDownOutline fill='red' />
		) : (
			<ThumbsDownFill fill='red' />
		);

	function handleLike(e) {
		e.preventDefault();

		if (!likedBy.includes(currentUser)) setLikedBy([...likedBy, currentUser]);
		else removeCurrentUser(likedBy, setLikedBy);

		if (dislikedBy.includes(currentUser)) removeCurrentUser(dislikedBy, setDislikedBy);
	}

	function handleDislike(e) {
		e.preventDefault();

		if (!dislikedBy.includes(currentUser)) setDislikedBy([...dislikedBy, currentUser]);
		else removeCurrentUser(dislikedBy, setDislikedBy);

		if (likedBy.includes(currentUser)) removeCurrentUser(likedBy, setLikedBy);
	}

	function removeCurrentUser(array, setState) {
		const i = array.indexOf(currentUser);
		array.splice(i, 1);
		setState(array);
	}

	return (
		<div className='overflow-auto p-2'>
			<strong>{username}</strong>
			<span className='float-end'>{date}</span>
			<p>{content}</p>
			<div className='float-end mb-2'>
				<a href='' onClick={handleLike}>
					{likeBtn()}
					{likedBy.length ? likedBy.length : ''}
				</a>
				<a href='' onClick={handleDislike}>
					{dislikeBtn()}
					{dislikedBy.length ? dislikedBy.length : ''}
				</a>
			</div>
		</div>
	);
};

export default Post;

import { useEffect, useState } from 'react';
import {
	ThumbsDownFill,
	ThumbsDownOutline,
	ThumbsUpFill,
	ThumbsUpOutline,
} from '../../Bootstrap/icons.jsx';
import './Post.css';

const Post = ({
	id,
	currentUser,
	username,
	content,
	date = 'date',
	likes,
	dislikes,
	updatePost,
}) => {
	const [likedBy, setLikedBy] = useState(likes);
	const [dislikedBy, setDislikedBy] = useState(dislikes);

	useEffect(() => {
		updatePost({ id, username, content, date, likedBy, dislikedBy });
	});

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
		const newState = [...array];
		newState.splice(i, 1);
		setState(newState);
	}

	return (
		<div className='overflow-auto p-2 border-bottom border-secondary'>
			<strong>{username}</strong>
			<span className='float-end'>{date}</span>
			<p>{content}</p>
			<div className='float-end mb-2'>
				<a href='' onClick={handleLike}>
					{likeBtn()}
				</a>
				{likedBy.length ? likedBy.length : ''}
				<a href='' onClick={handleDislike}>
					{dislikeBtn()}
				</a>
				{dislikedBy.length ? dislikedBy.length : ''}
			</div>
		</div>
	);
};

export default Post;

import { useState } from 'react';
import CreatePost from './CreatePost/CreatePost.jsx';
import './Feed.css';
import Post from './Post/Post.jsx';

import { ALL_POSTS } from '../../constants.js';

const Feed = props => {
	const { currentUser } = props;

	const getAllPosts = () => {
		return localStorage.getItem(ALL_POSTS) ? JSON.parse(localStorage.getItem(ALL_POSTS)) : [];
	};
	const updateAllPosts = allPosts => localStorage.setItem(ALL_POSTS, JSON.stringify(allPosts));

	const [posts, setPosts] = useState(getAllPosts());

	const displayPosts = () =>
		posts.map(post => {
			const { username, content, date, id, likedBy, dislikedBy } = post;
			return (
				<Post
					key={id}
					id={id}
					currentUser={currentUser}
					username={username}
					content={content}
					date={date}
					updatePost={updatePost}
					likes={likedBy}
					dislikes={dislikedBy}
				/>
			);
		});

	function addPost(content) {
		const newPost = {
			username: currentUser,
			content,
			date: new Date().toDateString(), //update for better ui display?
			likedBy: [],
			dislikedBy: [],
			id: posts.length,
		};

		const allPosts = [newPost, ...posts];
		updateAllPosts(allPosts);
		setPosts(getAllPosts());
	}

	function updatePost(newData) {
		const { id } = newData;
		let post = posts.filter(post => post.id == id)[0];
		const i = posts.indexOf(post);
		posts[i] = newData;
		updateAllPosts(posts);
	}

	return (
		<div id='feed'>
			<h4>Feed</h4>
			<CreatePost addPost={addPost} />
			{displayPosts()}
		</div>
	);
};

export default Feed;

import { useState } from 'react';
import CreatePost from './CreatePost/CreatePost.jsx';
import './Feed.css';
import Post from './Post/Post.jsx';

const Feed = props => {
	const { currentUser } = props;

	const [posts, setPosts] = useState([]);

	const allPosts = posts.map((post, i) => {
		const { username, content, date } = post;
		return (
			<Post key={i} currentUser={currentUser} username={username} content={content} date={date} />
		);
	});

	function addPost(content) {
		const newPost = { username: currentUser, content, date: new Date().toDateString() };
		setPosts([newPost, ...posts]);
	}

	return (
		<div id='feed'>
			<h4>Feed</h4>
			<CreatePost currentUser={currentUser} addPost={addPost} />
			{allPosts}
		</div>
	);
};

export default Feed;

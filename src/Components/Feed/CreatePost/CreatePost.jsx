import { useState } from 'react';
import { Button } from '../../Bootstrap/Bootstrap.jsx';
import './CreatePost.css';

const CreatePost = props => {
	const { addPost } = props;

	const [content, setContent] = useState('');

	function handleContent(e) {
		setContent(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		addPost(content);
		setContent('');
	}
	return (
		<div className='border-bottom border-secondary p-2'>
			<form onSubmit={handleSubmit}>
				<input
					className='new-post-content mb-2'
					type='text'
					value={content}
					placeholder={`What's happening?`}
					onChange={handleContent}
				/>
				<Button>Gripe</Button>
			</form>
		</div>
	);
};

export default CreatePost;

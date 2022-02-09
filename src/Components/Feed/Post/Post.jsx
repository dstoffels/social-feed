import './Post.css';

const Post = props => {
	const { username, content, date = 'date' } = props;

	return (
		<div className='p-2'>
			<strong>{username}</strong>
			<span className='float-end'>{date}</span>
			<p>{content}</p>
		</div>
	);
};

export default Post;

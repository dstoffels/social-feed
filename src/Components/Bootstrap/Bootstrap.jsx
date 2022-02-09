export const Row = props => {
	return <div className={`row ${props.className} `}>{props.children}</div>;
};

export const Col = props => {
	const { size = 'md', width = '6', className = '', children } = props;
	return <div className={`col-${size}-${width} ${className}`}>{children}</div>;
};

export const Button = props => {
	const { color, size, children, onClick, type = 'submit', className } = props;
	return (
		<button
			type={type}
			className={`btn ${color ? '' : 'btn-primary'} btn-${size} ${className}`}
			style={{ color: color }}
			onClick={onClick}>
			{children}
		</button>
	);
};

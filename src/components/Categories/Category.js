import './categories.css';

export default function Category({
	categoryIcon,
	name,
	category,
	handleClick,
}) {
	return (
		<div
			className={`category ${
				category.length > 0 &&
				(category === name ? 'selected noClick' : 'noClick')
			}`}
			onClick={handleClick}
		>
			{categoryIcon}
			<span>{name}</span>
		</div>
	);
}

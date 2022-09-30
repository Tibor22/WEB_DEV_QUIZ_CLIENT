import './categories.css';
import {
	SiNodedotjs,
	SiReact,
	SiJavascript,
	SiTypescript,
} from 'react-icons/si';
import { TbArrowsShuffle } from 'react-icons/tb';
import { GiFamilyTree } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import Category from './Category.js';

export default function Categories({ setCategory, category }) {
	const handleClick = (e) => {
		e.target.closest('.category').classList.toggle('selected');
		const categoryText = e.target
			.closest('.category')
			.querySelector('span').innerText;
		if (category.length > 0) {
			setCategory('');
		} else {
			setCategory(categoryText);
		}
	};

	return (
		<div className='categories-container'>
			<IconContext.Provider value={{ size: '7rem', color: 'white' }}>
				<Category
					categoryIcon={<SiNodedotjs />}
					name={'Node.Js'}
					category={category}
					handleClick={handleClick}
				/>
				<Category
					categoryIcon={<SiReact />}
					name={'React'}
					category={category}
					handleClick={handleClick}
				/>
				<Category
					categoryIcon={<SiJavascript />}
					name={'Javascript'}
					category={category}
					handleClick={handleClick}
				/>
				<Category
					categoryIcon={<SiTypescript />}
					name={'TypeScript'}
					category={category}
					handleClick={handleClick}
				/>
				<Category
					categoryIcon={<TbArrowsShuffle />}
					name={'Algorithms'}
					category={category}
					handleClick={handleClick}
				/>
				<Category
					categoryIcon={<GiFamilyTree />}
					name={'Data Structures'}
					category={category}
					handleClick={handleClick}
				/>
			</IconContext.Provider>
		</div>
	);
}

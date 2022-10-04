export default function Question(question) {
	return (
		<div className='single-play-inner-container'>
			<div className='timer'>30</div>
			<div className='single-play-inner-container__question'>
				{question.text}
			</div>
			<div className='single-play-inner-container__options'>
				<div className='option option--1'>
					<img
						src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
						alt=''
					/>
					<div className='option-letter'>A</div>
					<div className='option-text'>{question.options[0].text}</div>
				</div>
				<div className='option option--2'>
					<div className='option-letter'>B</div>
					<div className='option-text'>{question.options[1].text}</div>
				</div>
				<div className='option option--3'>
					<div className='option-letter'>C</div>
					<div className='option-text'>{question.options[2].text}</div>
				</div>
				<div className='option option--4'>
					<div className='option-letter'>D</div>
					<div id='answer' className='option-text'>
						{question.answer.text}
					</div>
				</div>
			</div>
		</div>
	);
}

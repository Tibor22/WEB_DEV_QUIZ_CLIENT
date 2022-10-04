import './single-play.css';
import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function SinglePlay() {
	const [questions, setQuestions] = useState([]);
	let [iteration, setIteration] = useState(0);
	let [timer, setTimer] = useState(10);

	const url = process.env.REACT_APP_API_URL;
	useEffect(() => {
		const getQuestions = async () => {
			const data = await axios.get(`${url}/question`);

			console.log(data);
			setQuestions(data.data.data);
		};

		getQuestions();
	}, []);

	let lastQuestion = useRef();

	let myInterval;
	useEffect(() => {
		// create a interval and get the id
		myInterval = setInterval(() => {
			if (lastQuestion.current) {
				clearInterval(myInterval);
			} else {
				setTimer((prevTime) => prevTime - 1);
			}
		}, 1000);
		// clear out the interval using the id when unmounting the component
		return () => clearInterval(myInterval);
	}, []);

	if (timer <= 0) {
		setIteration((iteration += 1));
		setTimer((prevTime) => prevTime + 10);
	}
	if (iteration > 9) {
		lastQuestion.current = true;
	}

	console.log('ITERATION:', iteration, 'TIMER:', timer);
	return (
		<div className='single-play-outer-container'>
			<Header />

			<div className='single-play-container'>
				{questions &&
					questions.slice(iteration, iteration + 1).map((question, i) => {
						return (
							<div className='single-play-inner-container'>
								<div className='timer'>{timer}</div>
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
										<div className='option-text'>
											{question.options[0].text}
										</div>
									</div>
									<div className='option option--2'>
										<div className='option-letter'>B</div>
										<div className='option-text'>
											{question.options[1].text}
										</div>
									</div>
									<div className='option option--3'>
										<div className='option-letter'>C</div>
										<div className='option-text'>
											{question.options[2].text}
										</div>
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
					})}
			</div>
			<Footer />
		</div>
	);
}

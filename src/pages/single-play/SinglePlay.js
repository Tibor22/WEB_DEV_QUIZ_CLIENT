import './single-play.css';
import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function SinglePlay() {
	const [questions, setQuestions] = useState([]);
	let [iteration, setIteration] = useState(0);
	let [timer, setTimer] = useState(10);
	const [answer, setAnswer] = useState(null);
	const [rightAnswers, setRightAnswers] = useState(0);

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
	let option0 = useRef();
	let option1 = useRef();
	let option2 = useRef();
	let option3 = useRef();

	let myInterval;
	useEffect(() => {
		// create a interval and get the id
		myInterval = setInterval(
			() => {
				if (lastQuestion.current) {
					clearInterval(myInterval);
				} else {
					setTimer((prevTime) => prevTime - 1);
				}
			},
			timer === 0 ? 3000 : 1000
		);
		// clear out the interval using the id when unmounting the component
		return () => clearInterval(myInterval);
	}, [timer]);
	console.log('RIGHT ANSWER ID:', questions[iteration]?.id == answer);
	if (timer < 0) {
		if (questions[iteration].id == answer) {
			setRightAnswers((prevAnswers) => prevAnswers + 1);
		}
		setIteration((iteration += 1));
		setTimer((prevTime) => prevTime + 10);

		// add point if answer was correct
	}
	if (iteration > 9) {
		lastQuestion.current = true;
	}

	const chooseAnswer = (e) => {
		console.log(e.target);
		setAnswer(e.target.id);
	};
	console.log('RIGHT ANSWERS:', rightAnswers);
	console.log('ANSWER ID:', answer);
	// console.log('OPTION0', option0.current.id);
	return (
		<div className='single-play-outer-container'>
			<Header />

			<div className='single-play-container'>
				{questions &&
					questions.slice(iteration, iteration + 1).map((question, i) => {
						return (
							<div key={i} className='single-play-inner-container'>
								<div className='timer'>{timer}</div>
								<div className='single-play-inner-container__question'>
									{question.text}
								</div>
								<div className='single-play-inner-container__options'>
									<div
										onClick={chooseAnswer}
										className={`option option--1 ${
											option0.current?.id == answer ? 'selected' : ''
										}`}
									>
										{option0.current?.id == answer && (
											<img
												src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
												alt=''
											/>
										)}
										<div className='option-letter'>A</div>
										<div
											ref={option0}
											className='option-text'
											id={question.options[0].id}
										>
											{question.options[0].text}
										</div>
									</div>

									<div
										onClick={chooseAnswer}
										className={`option option--2 ${
											option1.current?.id == answer ? 'selected' : ''
										}`}
									>
										{option1.current?.id == answer && (
											<img
												src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
												alt=''
											/>
										)}
										<div className='option-letter'>B</div>
										<div
											ref={option1}
											className='option-text'
											id={question.options[1].id}
										>
											{question.options[1].text}
										</div>
									</div>
									<div
										onClick={chooseAnswer}
										className={`option option--3 ${
											option2.current?.id == answer ? 'selected' : ''
										}`}
									>
										{option2.current?.id == answer && (
											<img
												src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
												alt=''
											/>
										)}
										<div className='option-letter'>C</div>
										<div
											ref={option2}
											className='option-text'
											id={question.options[2].id}
										>
											{question.options[2].text}
										</div>
									</div>
									<div
										onClick={chooseAnswer}
										className={`option option--4 ${
											option3.current?.id == answer ? 'selected' : ''
										}`}
									>
										{option3.current?.id == answer && (
											<img
												src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
												alt=''
											/>
										)}
										<div className='option-letter'>D</div>
										<div
											ref={option3}
											className='option-text'
											id={question.options[3].id}
										>
											{question.options[3].text}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				<div className='next-btn'>Submit answer</div>
			</div>

			<Footer />
		</div>
	);
}

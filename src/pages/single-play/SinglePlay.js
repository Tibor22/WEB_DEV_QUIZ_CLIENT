import './single-play.css';
import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function SinglePlay() {
	const [questions, setQuestions] = useState([]);
	let [iteration, setIteration] = useState(0);
	let [timer, setTimer] = useState(30);
	const [answer, setAnswer] = useState(null);
	const [rightAnswers, setRightAnswers] = useState(0);

	//category
	let location = useLocation();

	console.log(location.state);
	const url = process.env.REACT_APP_API_URL;
	useEffect(() => {
		const getQuestions = async () => {
			const data = await axios.get(`${url}/question/nodeJS`);

			console.log(data);
			setQuestions(data.data.data);
		};

		getQuestions();
	}, []);

	let lastQuestion = useRef();
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
	if (timer < 0) {
		if (questions[iteration].answer === answer) {
			setRightAnswers((prevAnswers) => prevAnswers + 1);
		}
		setAnswer(null);
		setIteration((iteration += 1));
		setTimer((prevTime) => prevTime + 30);

		// add point if answer was correct
	}
	if (iteration > 9) {
		lastQuestion.current = true;
	}

	const chooseAnswer = (answer) => {
		if (timer < 1) return;
		setAnswer(answer);
	};

	const handleSubmit = () => {
		if (answer) {
			setTimer(0);
		}
	};
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
									<code class='language-javascript'> {question.text}</code>
								</div>
								<div className='single-play-inner-container__options'>
									{question.options.map((option, i) => {
										const map = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' };
										return (
											<div
												onClick={() => chooseAnswer(option.text)}
												className={`option option--${i} ${
													option.text === answer ? 'selected-option' : ''
												} ${
													timer === 0 &&
													timer === 0 &&
													question.answer == option.text
														? 'right-answer'
														: ''
												}${
													timer === 0 &&
													timer === 0 &&
													question.answer !== option.text
														? 'wrong-answer'
														: ''
												}`}
											>
												{option.text == answer && (
													<img
														src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
														alt=''
													/>
												)}
												<div className='option-letter'>{map[i]}</div>
												<div className='option-text'>{option.text}</div>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				<div onClick={handleSubmit} className='next-btn'>
					Submit answer
				</div>
			</div>

			<Footer />
		</div>
	);
}

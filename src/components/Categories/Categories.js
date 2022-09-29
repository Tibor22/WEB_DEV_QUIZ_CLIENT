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

export default function Categories({ setCategory, category }) {
    const handleClick = (e) => {};

    return (
        <div className='categories-container'>
            <IconContext.Provider value={{ size: '7rem', color: 'white' }}>
                <div onClick={handleClick}>
                    <SiNodedotjs />
                    <span>Node.Js</span>
                </div>
                <div onClick={handleClick} id='react'>
                    <SiReact />
                    <span>React</span>
                </div>
                <div onClick={handleClick} id='javascript'>
                    <SiJavascript />
                    <span>Javascript</span>
                </div>
                <div onClick={handleClick} id='typescript'>
                    <SiTypescript />
                    <span>TypeScript</span>
                </div>
                <div onClick={handleClick} id='algorithms'>
                    <TbArrowsShuffle />
                    <span>Algorithms</span>
                </div>
                <div onClick={handleClick} id='data-structures'>
                    <GiFamilyTree />
                    <span>Data Structures</span>
                </div>
            </IconContext.Provider>
        </div>
    );
}

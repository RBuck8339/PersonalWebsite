import React from 'react';
import styles from './Skills.module.css';
import {Skill} from '../../components/Cards/Cards';

// Language skill imports
import arduino_img from '../../assets/images/skills/languages/arduino.png';
import c_img from '../../assets/images/skills/languages/c.png';
import cpp_img from '../../assets/images/skills/languages/cpp.png';
import css_img from '../../assets/images/skills/languages/css.png';
import flutter_img from '../../assets/images/skills/languages/flutter.png';
import html_img from '../../assets/images/skills/languages/html.png';
import java_img from '../../assets/images/skills/languages/java.png';
import javascript_img from '../../assets/images/skills/languages/javascript.png';
import python_img from '../../assets/images/skills/languages/python.png';

// Library img imports
import matplotlib_img from '../../assets/images/skills/libraries/matplotlib.png';
import numpy_img from '../../assets/images/skills/libraries/numpy.png';
import openai_img from '../../assets/images/skills/libraries/openaiapi.png';
import pandas_img from '../../assets/images/skills/libraries/pandas.png';
import pytorch_img from '../../assets/images/skills/libraries/pytorch.png';
import seaborn_img from '../../assets/images/skills/libraries/seaborn.png';
import tensorflow_img from '../../assets/images/skills/libraries/tensorflow.png';

// Tools img imports
import docker_img from '../../assets/images/skills/tools/docker.png';
import git_img from '../../assets/images/skills/tools/git.png';
import github_img from '../../assets/images/skills/tools/github.png';
import linux_img from '../../assets/images/skills/tools/linux.png';
import vscode_img from '../../assets/images/skills/tools/vscode.png';

// Dev img imports
import flask_img from '../../assets/images/skills/dev/flask.png';
import nodejs_img from '../../assets/images/skills/dev/nodejs.png';
import react_img from '../../assets/images/skills/dev/react.png';


export function Skills(){
    return (
        <div className={styles.Skills}>
            <div className={styles.Languages}>
                <h1>Languages</h1>
                <Languages />
            </div>
            <div className={styles.Libraries}>
                <h1>Libraries</h1>
                <Libraries />
            </div>
            <div className={styles.Tools}>
                <h1>Tools</h1>
                <Tools />
            </div>
            <div className={styles.Dev}>
                <h1>Dev</h1>
                <Dev />
            </div>
        </div>
    );
}

function Languages(){
    let languages = [
        {
            Name: 'Python',
            Display: <img src={python_img} alt="Email"/>
        },
        {
            Name: 'C',
            Display: <img src={c_img} alt="Email"/>
        },
        {
            Name: 'C++',
            Display: <img src={cpp_img} alt="Email"/>
        },
        {
            Name: 'Java',
            Display: <img src={java_img} alt="Email"/>
        },
        {
            Name: 'HTML',
            Display: <img src={html_img} alt="Email"/>
        },
        {
            Name: 'CSS',
            Display: <img src={css_img} alt="Email"/>
        },
        {
            Name: 'JavaScript',
            Display: <img src={javascript_img} alt="Email"/>
        },
        {
            Name: 'Flutter',
            Display: <img src={flutter_img} alt="Email"/>
        },
        {
            Name: 'Arduino',
            Display: <img src={arduino_img} alt="Email"/>
        },
    ]
    return(
        <div className={styles.languageCards}>
            {languages.map((details) =>
            <Skill details={details} />)}
        </div>
    )
}

function Libraries(){
    let libraries = [
        {
            Name: 'Pandas',
            Display: <img src={pandas_img} alt="Email"/>
        },
        {
            Name: 'Numpy',
            Display: <img src={numpy_img} alt="Email"/>
        },
        {
            Name: 'PyTorch',
            Display: <img src={pytorch_img} alt="Email"/>
        },
        {
            Name: 'Tensorflow',
            Display: <img src={tensorflow_img} alt="Email"/>
        },
        {
            Name: 'MatPlotLib',
            Display: <img src={matplotlib_img} alt="Email"/>
        },
        {
            Name: 'OpenAI API',
            Display: <img src={openai_img} alt="Email"/>
        },
        {
            Name: 'Seaborn',
            Display: <img src={seaborn_img} alt="Email"/>
        },
    ]
    return(
        <div className={styles.libraryCards}>
            {libraries.map((details) =>
            <Skill details={details} />)}
        </div>
    )
}

function Tools(){
    let tools = [
        {
            Name: 'Git',
            Display: <img src={git_img} alt="Email"/>
        },
        {
            Name: 'GitHub',
            Display: <img src={github_img} alt="Email"/>
        },
        {
            Name: 'VSCode',
            Display: <img src={vscode_img} alt="Email"/>
        },
        {
            Name: 'Docker',
            Display: <img src={docker_img} alt="Email"/>
        },
        {
            Name: 'Linux',
            Display: <img src={linux_img} alt="Email"/>
        },
    ]
    return(
        <div className={styles.toolCards}>
            {tools.map((details) =>
            <Skill details={details} />)}
        </div>
    )
}

function Dev(){
    let dev = [
        {
            Name: 'Flask',
            Display: <img src={flask_img} alt="Email"/>
        },
        {
            Name: 'React',
            Display: <img src={react_img} alt="Email"/>
        },
        {
            Name: 'Node.js',
            Display: <img src={nodejs_img} alt="Email"/>
        },
    ]
    return(
        <div className={styles.devCards}>
            {dev.map((details) =>
            <Skill details={details} />)}
        </div>
    )
}

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
import jupyter_img from '../../assets/images/skills/tools/jupyter.png';
import wandb_img from '../../assets/images/skills/tools/wandb.png';

// Dev img imports
import flask_img from '../../assets/images/skills/dev/flask.png';
import nodejs_img from '../../assets/images/skills/dev/nodejs.png';
import react_img from '../../assets/images/skills/dev/react.png';


export function Skills(){
    return (
        <div className={styles.Skills}>
            <div className={styles.column1}>
                <div className={styles.skillGroup}>
                    <h1 className={styles.header}>Languages</h1>
                    <Languages />
                </div>
                <div className={styles.skillGroup}>
                    <h1 className={styles.header}>Tools</h1>
                    <Tools />
                </div>
            </div>
            <div className={styles.column2}>
                <div className={styles.skillGroup}>
                    <h1 className={styles.header}>Libraries</h1>
                    <Libraries />
                </div>
                <div className={styles.skillGroup}>
                    <h1 className={styles.header}>Dev</h1>
                    <Dev />
                </div>
            </div>
        </div>
    );
}

function Languages(){
    let languages = [
        {
            Name: 'Python',
            Display: <img className={styles.logo} src={python_img} alt="Python"/>
        },
        {
            Name: 'C',
            Display: <img className={styles.logo} src={c_img} alt="C"/>
        },
        {
            Name: 'C++',
            Display: <img className={styles.logo} src={cpp_img} alt="C++"/>
        },
        {
            Name: 'Java',
            Display: <img className={styles.logo} src={java_img} alt="Java"/>
        },
        {
            Name: 'HTML',
            Display: <img className={styles.logo} src={html_img} alt="HTML"/>
        },
        {
            Name: 'CSS',
            Display: <img className={styles.logo} src={css_img} alt="CSS"/>
        },
        {
            Name: 'JavaScript',
            Display: <img className={styles.logo} src={javascript_img} alt="JavaScript"/>
        },
        {
            Name: 'Flutter',
            Display: <img className={styles.logo} src={flutter_img} alt="Flutter"/>
        },
        {
            Name: 'Arduino',
            Display: <img className={styles.logo} src={arduino_img} alt="Arduino"/>
        },
    ]

    let grouped_languages = groupItems(languages, 5);

    return(
        <div className={styles.languageCards}>
            {grouped_languages.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.languageRow}>
                    {group.map((details, index) => (
                        <Skill key={index} details={details} />
                    ))}
                </div>
            ))}
        </div>
    )
}

function Libraries(){
    let libraries = [
        {
            Name: 'Pandas',
            Display: <img className={styles.logo} src={pandas_img} alt="Pandas"/>
        },
        {
            Name: 'Numpy',
            Display: <img className={styles.logo} src={numpy_img} alt="Numpy"/>
        },
        {
            Name: 'PyTorch',
            Display: <img className={styles.logo} src={pytorch_img} alt="PyTorch"/>
        },
        {
            Name: 'Tensorflow',
            Display: <img className={styles.logo} src={tensorflow_img} alt="Tensorflow"/>
        },
        {
            Name: 'MatPlotLib',
            Display: <img className={styles.logo} src={matplotlib_img} alt="MatPlotLib"/>
        },
        {
            Name: 'OpenAI API',
            Display: <img className={styles.logo} src={openai_img} alt="OpenAI API"/>
        },
        {
            Name: 'Seaborn',
            Display: <img className={styles.logo} src={seaborn_img} alt="Seaborn"/>
        },
    ]

    let grouped_libraries = groupItems(libraries, 5);

    return(
        <div className={styles.libraryCards}>
            {grouped_libraries.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.libraryRow}>
                    {group.map((details, index) => (
                        <Skill key={index} details={details} />
                    ))}
                </div>
            ))}
        </div>
    )
}

function Tools(){
    let tools = [
        {
            Name: 'Git',
            Display: <img className={styles.logo} src={git_img} alt="Git"/>
        },
        {
            Name: 'GitHub',
            Display: <img className={styles.logo} src={github_img} alt="GitHub"/>
        },
        {
            Name: 'Jupyter',
            Display: <img className={styles.logo} src={jupyter_img} alt="Jupyter"/>
        },
        {
            Name: 'VSCode',
            Display: <img className={styles.logo} src={vscode_img} alt="VSCode"/>
        },
        {
            Name: 'Docker',
            Display: <img className={styles.logo} src={docker_img} alt="Docker"/>
        },
        {
            Name: 'Linux',
            Display: <img className={styles.logo} src={linux_img} alt="Linux"/>
        },
        {
            Name: 'Weights & Biases',
            Display: <img className={styles.logo} src={wandb_img} alt="WandB"/>
        }
    ]

    let grouped_tools = groupItems(tools, 4);

    return(
        <div className={styles.toolCards}>
            {grouped_tools.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.toolRow}>
                    {group.map((details, index) => (
                        <Skill key={index} details={details} />
                    ))}
                </div>
            ))}
        </div>
    )
}

function Dev(){
    let dev = [
        {
            Name: 'Flask',
            Display: <img className={styles.logo} src={flask_img} alt="Flask"/>
        },
        {
            Name: 'React',
            Display: <img className={styles.logo} src={react_img} alt="React"/>
        },
        {
            Name: 'Node.js',
            Display: <img className={styles.logo} src={nodejs_img} alt="NodeJS"/>
        },
    ]

    let grouped_dev = groupItems(dev, 4);

    return(
        <div className={styles.devCards}>
            {grouped_dev.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.devRow}>
                    {group.map((details, index) => (
                        <Skill key={index} details={details} />
                    ))}
                </div>
            ))}
        </div>
    )
}

// Build rows by slicing the data into smaller rows
function groupItems(data, itemsPerRow){
    let items = [];
    for(let i = 0; i < data.length; i += itemsPerRow){
        items.push(data.slice(i, i + itemsPerRow));
    }

    return items;
}
import React from 'react';
import {useSearchParams} from 'react-router-dom';
import styles from './Portfolio.module.css';
import {Experience, Education, Publication, Position} from '../../components/Cards/Cards';
import fgcu_img from '../../assets/images/portfolio/schools/fgcu_logo.png';
import ucf_img from '../../assets/images/portfolio/schools/ucf_logo.png';


function Positions(){
    let positions = [
        // Research
        {
            Name: 'Undergraduate Researcher',
            Location: 'Future Data Lab',
            Date: 'March 2024 - Present',
            Description:
                <div className={styles.positionDescription}>
                    <ul>
                        <li>Currently writing a survey paper on the development, applications, and future of temporal graph neural networks</li>
                        <li>Employ network-based methods on real-world Ethereum and Blockchain datasets using Python libraries such as Networkx and PyTorch</li>
                        <li>Develop graph embedding methods for continuous-time predictions</li>
                    </ul>
                </div>,
            Skills: ''
        },
        // Teaching Assistant
        {
            Name: 'Teaching Assistant',
            Location: 'University of Central Florida',
            Date: 'August 2024 - Present',
            Description: 
                <div className={styles.positionDescription}>
                    <ul>
                        <li>Assisted 60 Masters in Fintech students in the course Computational Methods in Fintech</li>
                        <li>Taught students basic python programming, data science, and machine learning techniques to assist them in their careers</li>
                    </ul>
                </div>,
            Skills: ''
        }
    ]
        
    let grouped_positions = groupItems(positions, 2);

    return (
        <div className={styles.positionCards}>
            {grouped_positions.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.positionRow}>
                    {group.map((details, index) => (
                        <Position key={index} id = {details.id} details={details} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function Educations(){
    let education = [
        // UCF
        {
            School: 'University of Central Florida',
            Img: <img className={styles.logo} src={ucf_img} alt="UCF_Logo"/>,
            Major: 'Computer Science',
            Minor: 'Intelligent Robotics Systems',
            GPA: '3.95 ',
            Dates: 'August 2023 - May 2026',
            Organizations: ['Burnett Honors College', 'Knight\'s Experimental Rocketry', 'Knight Hack\'s', 'IEEE'],
            Coursework: ['Computer Science I', 'Computer Science II', 'Algorithms for Machine Learning', 'Principles of Object Oriented Software Development', 'Discrete Structures', 'AI for Game Development'],
            id: 'UCF'
        },
        // FGCU
        {
            School: 'Florida Gulf Coast University',
            Img: <img className={styles.logo} src={fgcu_img} alt="FGCU_Logo"/>,
            Major: 'Software Engineering',
            Minor: 'Mathematics',
            GPA: '3.97',
            Dates: 'August 2021 - May 2023',
            Organizations: ['Accelerated Collegiate Academy'],
            Coursework: ['Discrete Mathematics', 'Programming I (C++)', 'Programming II (C++)'],
            id: 'FGCU'
        }
    ]

    let grouped_educations = groupItems(education, 2);

    return (
        <div className={styles.educationCards}>
            {grouped_educations.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.educationRow}>
                    {group.map((details, index) => (
                        <Education key={index} id = {details.id} details={details} />
                    ))}
                </div>
            ))}
        </div>
    );
}


function Organizations(){
    let organization = [

    ]

    let grouped_organizations = groupItems(organization, 3);

}


function Experiences(){
    let experience = [
        // ICML 2024
        {
            Name: 'ICML Topological Deep Learning Challenge',
            Location: 'Virtual',
            Date: 'July 2024',
            Description: 'As part of the International Conference on Machine Learning 2024, my team developed a novel weighted clique lifting from a weighted-directed graph to a simplicial complex by utilizing the Forman Ricci Curvature of edges. Although we did not win, the winning submission used a method very similar to ours, taking advantage of the Forman Ricci Curvature of edges to lift a graph to a simplicial complex.',
            ProjectLink: 'https://github.com/RBuck8339/challenge-icml-2024',
            Tags: ['Python', 'Graph Theory', 'Applied Mathematics', 'Competition', 'Project'],
            id: 'ICML Topological Deep Learning Challenge'
        },
        // KXR
        {
            Name: 'Rocket Control Panel',
            Location: 'Knight\'s Experimental Rocketry',
            Date: 'Auguest 2023 - April 2024',
            Description: 'This control panel is a fully customizable control panel that works for two distinct rocket teams. The control panel features 10 switches, 5 buttons, and a key to prepare to fire the rocket. It supports 3 monitors, displaying live data readings from the rockets onboard FPGA board with data received through the TCP protocol. It operates on an STM32 microcontroller and a Python script that connects to the Arduino program uploaded on the microcontroller.',
            Img: 'imghere',
            Tags: ['Hardware', 'Arduino', 'Python', 'Student Organization', 'Networking'],
            id: 'Rocket Control Panel',
        },
        // DOTA2 Math Prediction
        {
            Name: 'DOTA2 Match Prediction Model',
            Description: 'My first full-stack application, and my first time designing a front-end for a website. It successfully predicts the outcome of a DOTA2 match given the players pre-game statistics. Instead of using a dataset I found online, I created and cleaned my own dataset using REST API and GraphQL queries. I designed and tested various machine learning models and neural networks using the PyTorch and Tensorflow libraries.',
            ProjectLink: 'https://github.com/RBuck8339/DOTA2-Ranked-Predictions',
            Img: 'imghere',
            Tags: ['Python', 'Flask', 'Full-Stack', 'Machine Learning', 'Feature Engineering', 'Data Analysis'],
            id: 'DOTA2 Match Prediction Model'
        },
        // One Piece Summarizer
        {
            Name: 'One Piece Summarizer',
            Location: 'Knight Hacks VI',
            Date: 'October 2023',
            Description: 'For my first ever hackathon, my team designed a project that summarizes the over 1000 episode long anime \'One Piece\'. Our first time using machine learning, we used the Spacy library to summarize the anime between any two given episodes from a text document containing the entire plot of \'One Piece\'. We won the \'Frying Pan Prize\', a prize dedicated to the team that had the funniest submission in the hackathon.',
            ProjectLink: 'https://github.com/mirthless7/onePieceSummarizer',
            Img: 'imghere',
            Tags: ['Python', 'Machine Learning', 'Competition', 'Hackathon'],
            id: 'One Piece Summarizer'
        }, 
        // Skribe Monkey
        {
            Name: 'Skribe Monkey',
            Location: 'Knight Hacks VII',
            Date: 'October 2024',
            Description: 'An IOS application designed to speed up the medical diagnosis process. Through the OpenAI\'s Whisper API, we record patient-nurse interactions, diagnosing the patient and assessing the severity of their situation. We used Flutter and Supabase to design this application. My primary role was backend integration for the Whisper API and patient data storage.',
            ProjectLink: 'https://github.com/rahulg221/skribemonkey',
            Img: 'imghere',
            Tags: ['Competition', 'Hackathon', 'Dart', 'Databases', 'Full-Stack', 'Mobile Development', 'APIs'],
            id: 'Skribe Monkey'
        },
        // Temporal GFMs
        {
            Name: 'Temporal Graph Foundation Models',
            Location: 'Future Data Lab',
            Description: 'As a member of the Future Data Lab, we seek to design the first ever Continuous-Time Graph Foundation Model. My main role is programming the implementation of our ideas to build an accurate model. We use full graph embedding methods inspired by the paper \'TopER\' and aim to predict future graph states that we can use to extract and predict graph properties for use in real-world datasets.',
            Tags: ['Python', 'Graph Neural Networks', 'Recurrent Neural Networks', 'Research', 'Graph Theory'],
            id: 'Temporal Graph Foundation Models'
        },
        // Zaman GNN
        {
            Name: 'Zaman GNN',
            Location: 'Future Data Lab',
            Description: 'As a member of the Future Data Lab, we seek to design a node-embedding method that represents graphs in a continuous-time setting. This would allow more seamless predictions with less memory involved. We are currently researching embedding methods from research papers that appear at conferences such as ICML, reaching out to teams as needed and using applied mathematics to improve upon their methods.',
            Tags: ['Python', 'Research', 'Graph Neural Networks', 'Recurrent Neural Networks', 'Applied Mathematics', 'Graph Theory'],
            id: 'Zaman GNN'
        },
        // F1-Tenth
        {
            Name: 'F1-Tenth',
            Location: 'IEEE',
            Date: 'September 2023 - Present',
            Description: 'As a member of IEEE, we aim to build a 1/10 scale autonomous car that will compete in the International F1-Tenth competition in May 2025. It uses the YOLO Computer Vision architecture, path planning, and other machine learning algorithms to navigate an unfamiliar race course. ',
            Tags: ['Robotics', 'Python', 'ROS', 'Machine Learning', 'Computer Vision', 'Student Organization'],
            id: 'F1-Tenth'
        },
    ]

    let grouped_experiences = groupItems(experience, 3);

    return (
        <div className={styles.experienceCards}>
            {grouped_experiences.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.experienceRow}>
                    {group.map((details, index) => (
                        <Experience key={index} id={details.id} details={details} />
                    ))}
                </div>
            ))}
        </div>
    );
}


/*Might make this its own page, as part of a dropdown menu that shows project demos */
function Publications(){
    let publications = [
        {
            Title: 'Coming Soon',
            Date: 'Soon',
            Link: 'Here'
        }
    ]

    let grouped_publications = groupItems(publications, 1);

    return (
        <div className={styles.publicationCards}>
            {grouped_publications.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.publicationRow}>
                    {group.map((details, index) => (
                        <Publication key={index} id={details.id} details={details} />
                    ))}
                </div>
            ))}
        </div>
    );
}


function SearchBar(){

}

export function Portfolio(){
    return (
        <div className={styles.Portfolio}>
            <div className={styles.Positions}>
                <h1 className={styles.title}><b>Positions:</b></h1>
                <Positions />
            </div>
            <div className={styles.Education}>
                <h1 className={styles.title}><b>Education:</b></h1>
                <Educations />    
            </div>
            <div className={styles.Experiences}>
                <h1 className={styles.title}><b>Experiences:</b></h1>
                <Experiences />
            </div>
            <div className={styles.Publications}>
                <h1 className={styles.title}><b>Publications:</b></h1>
                <Publications />
            </div>
        </div>
    );
}

// Build rows by slicing the data into smaller rows
function groupItems(data, itemsPerRow){
    let items = [];
    for(let i = 0; i < data.length; i += itemsPerRow){
        items.push(data.slice(i, i + itemsPerRow));
    }

    return items;
}
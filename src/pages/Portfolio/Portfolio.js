import React from 'react';
import {useSearchParams} from 'react-router-dom';
import styles from './Portfolio.module.css';
import {Experience, Education, Publication} from '../../components/Cards/Cards';

function Positions(){
    let positions = [
        // Research
        {
            Position: 'Undergraduate Researcher',
            Location: 'Future Data Lab',
            Date: 'March 2024 - Present',
            Description: ''
        },
        // Teaching Assistant
        {
            Position: 'Teaching Assistant',
            Location: 'University of Central Florida',
            Date: 'August 2024 - Present',
            Description: ''
        }
    ]
        
    return (
        <h1>RAHHH</h1>
    );
}

function Educations(){
    let education = [
        // UCF
        {
            School: 'University of Central Florida',
            Major: 'Computer Science',
            Minor: 'Intelligent Robotics Systems',
            GPA: '3.98',
            Dates: 'August 2023 - May 2026',
            Organizations: ['Burnett Honors College', 'Knight\'s Experimental Rocketry', 'Knight Hack\'s', 'IEEE'],
            Coursework: ['Computer Science I', 'Computer Science II', 'Algorithms for Machine Learning', 'Principles of Object Oriented Software Development', 'Discrete Structures', 'AI for Game Development'],
            id: 'UCF'
        },
        // FGCU
        {
            School: 'Florida Gulf Coast University',
            Major: 'Software Engineering',
            Minor: 'Mathematics',
            GPA: '3.97',
            Dates: 'August 2021 - May 2023',
            Organizations: ['The Collegiate Academy'],
            Coursework: ['Discrete Mathematics', 'Programming I (C++)', 'Programming II (C++)'],
            id: 'FGCU'
        }
    ]
    return (
        education.map((details) =>
        <Education id={details.id} details={details} />
        )
    );
}


function Organizations(){
    let organization = [

    ]
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
            Description: 'As part of the International Conference on Machine Learning 2024, my team developed a novel weighted clique lifting from a weighted-directed graph to a simplicial complex by utilizing the Forman Ricci Curvature of edges. Although we did not win, the winning submission used a method very similar to ours, taking advantage of the Forman Ricci Curvature of edges to lift a graph to a simplicial complex.',
            Img: 'imghere',
            Tags: ['Hardware', 'Arduino', 'Python', 'Student Organization', 'Networking'],
            id: 'Rocket Control Panel',
        },
        // DOTA2 Math Prediction
        {
            Name: 'DOTA2 Match Prediction Model',
            Description: 'As part of the International Conference on Machine Learning 2024, my team developed a novel weighted clique lifting from a weighted-directed graph to a simplicial complex by utilizing the Forman Ricci Curvature of edges. Although we did not win, the winning submission used a method very similar to ours, taking advantage of the Forman Ricci Curvature of edges to lift a graph to a simplicial complex.',
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
            Description: 'As part of the International Conference on Machine Learning 2024, my team developed a novel weighted clique lifting from a weighted-directed graph to a simplicial complex by utilizing the Forman Ricci Curvature of edges. Although we did not win, the winning submission used a method very similar to ours, taking advantage of the Forman Ricci Curvature of edges to lift a graph to a simplicial complex.',
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
            Description: 'As part of the International Conference on Machine Learning 2024, my team developed a novel weighted clique lifting from a weighted-directed graph to a simplicial complex by utilizing the Forman Ricci Curvature of edges. Although we did not win, the winning submission used a method very similar to ours, taking advantage of the Forman Ricci Curvature of edges to lift a graph to a simplicial complex.',
            ProjectLink: 'https://github.com/rahulg221/skribemonkey',
            Img: 'imghere',
            Tags: ['Competition', 'Hackathon', 'Dart', 'Databases', 'Full-Stack', 'Mobile Development', 'APIs'],
            id: 'Skribe Monkey'
        },
        // Temporal GFMs
        {
            Name: 'Temporal Graph Foundation Models',
            Location: 'Future Data Lab',
            Description: 'As part of the International Conference on Machine Learning 2024, my team developed a novel weighted clique lifting from a weighted-directed graph to a simplicial complex by utilizing the Forman Ricci Curvature of edges. Although we did not win, the winning submission used a method very similar to ours, taking advantage of the Forman Ricci Curvature of edges to lift a graph to a simplicial complex.',
            Tags: ['Python', 'Graph Neural Networks', 'Recurrent Neural Networks', 'Research', 'Graph Theory'],
            id: 'Temporal Graph Foundation Models'
        },
        // Zaman GNN
        {
            Name: 'Zaman GNN',
            Location: 'Future Data Lab',
            Description: 'As part of the International Conference on Machine Learning 2024, my team developed a novel weighted clique lifting from a weighted-directed graph to a simplicial complex by utilizing the Forman Ricci Curvature of edges. Although we did not win, the winning submission used a method very similar to ours, taking advantage of the Forman Ricci Curvature of edges to lift a graph to a simplicial complex.',
            Tags: ['Python', 'Research', 'Graph Neural Networks', 'Recurrent Neural Networks', 'Applied Mathematics', 'Graph Theory'],
            id: 'Zaman GNN'
        },
        // F1-Tenth
        {
            Name: 'F1-Tenth',
            Location: 'IEEE',
            Date: 'September 2023 - Present',
            Description: 'As part of the International Conference on Machine Learning 2024, my team developed a novel weighted clique lifting from a weighted-directed graph to a simplicial complex by utilizing the Forman Ricci Curvature of edges. Although we did not win, the winning submission used a method very similar to ours, taking advantage of the Forman Ricci Curvature of edges to lift a graph to a simplicial complex.',
            Tags: ['Robotics', 'Python', 'ROS', 'Machine Learning', 'Computer Vision', 'Student Organization'],
            id: 'F1-Tenth'
        },


    ]
    return (
        <div className="Experience">{
            experience.map((details) => 
                <Experience key={details.id} details={details}/>                 
        )}</div>
    );
}


function Publications({details}){
    let publication = [
        {
            Title: 'Coming Soon',
            Date: 'Soon',
            Link: 'Here'
        }
    ]
    return <div className="Publication">{
        publication.map((details) =>
            <Publication key={details.id} details={details}/>
        )}
    </div>
}


function SearchBar(){

}

export function Portfolio(){
    return (
        <div className={styles.portfolio}>
            <h1><b>Education:</b></h1>
            <Educations />
            <h1><b>Experiences:</b></h1>
            <Experiences />
            <h1><b>Publications:</b></h1>
            <Publications />
        </div>
    );
}
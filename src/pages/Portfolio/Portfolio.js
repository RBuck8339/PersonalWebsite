import React , {useState, useRef, useEffect} from 'react';
import styles from './Portfolio.module.css';
import {Experience, Publication, Tag} from '../../components/Cards/Cards';


function getExperiences(){
    return [
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
            Date: 'August 2023 - April 2024',
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
    ];
}


function getPublications(){
    return [
        {
            Title: 'Coming Soon',
            Date: 'Soon',
            Link: 'Here',
            Tags: ['Upcoming', 'Research']
        }
    ];
}


function SearchBar({query, setQuery}){
    const [showTags, setShowTags] = useState(false);
    const wrapper = useRef(null);

    const tags = [
        // Languages
        'Python',
        'C',
        'C++',
        'JavaScript',
        'Java', 

        // Frameworks and Libraries
        'React',
        'Flask',
        'TensorFlow',
        'PyTorch',
        'Pandas',
        'Scikit-learn',
        'Flutter',

        //Tools
        'Git',
        'Docker',
        'GarphQL',
        'SQLite',
        'MySQL',
        'Jupyter',
        'VS Code',
        'Linux',

        // Front End Dev
        'HTML',
        'CSS',

        // Back End Dev


        // Databases
        'SQL',
        'NoSQL',
        'MySQL',
        'SQLite',
        
        // ML and AI
        'Machine Learning',
        'Neural Networks',
        'Reinforcement Learning',
        'Computer Vision',
        'Data Science',
        'Time Series',
        
        // Embedded and Hardward
        'Embedded',
        'Hardware',

        // APIs
        'REST APIs',
        'OpenAI API',

        // Where it was
        'Research',
        'Student Organization',
        'Personal Project',
        'Hackathon',
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(wrapper.current && !wrapper.current.contains(e.target)){
                setShowTags(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className={styles.searchBarBox} ref={wrapper}>
            <input 
                className={styles.searchBar}
                id="searchBar"
                type="text"
                placeholder="Search by project or publication tag..."
                value={query}
                onChange={(e) => {
                        setQuery(e.target.value)
                    }
                }
                onFocus={() => setShowTags(true)}
            />
            {showTags && (
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <Tag key={tag} name={tag} id="Tag" onClick={() => setQuery(tag)}/>
                    ))}
                </div>
            )}
            
        </div>
    )
}


function Experiences({query}){
    query = query.toLowerCase().trim();

    let experiences = getExperiences();
    
    let filtered_experiences = query 
        ? experiences.filter((details) => details.Tags.some((tag) => tag.toLowerCase().includes(query)))
        : experiences;

    return (
        <div className={styles.experienceCards}>
            {filtered_experiences.map((details, index) => (
                <Experience key={index} id={details.id} details={details} />
            ))}
        </div>
    );
}


/*Might make this its own page, as part of a dropdown menu that shows project demos */
function Publications({query}){
    query = query.toLowerCase().trim();

    let publications = getPublications();

    let filtered_publications = query 
        ? publications.filter((details) => details.Tags.some((tag) => tag.toLowerCase().includes(query)))
        : publications;

    return (
        <div className={styles.publicationCards}>
            {filtered_publications.map((details, index) => (
                <Publication key={index} id={details.id} details={details} />
            ))}
        </div>
            
    );
}


export function Portfolio(){
    const [query, setQuery] = useState(''); // For managing our searches

    return (
        <div className={styles.Portfolio}>
            <div className={styles.introText}>
                <h1>My Portfolio</h1>
                <p>It is important to me that each project that I take on has something new for me to learn. So I have joined a variety of clubs and challenged myself in personal projects. Below is a list of my projects and publications to date.</p>
            </div>
            <SearchBar query={query} setQuery={setQuery} />
            <div className={styles.Experiences}>
                <h1 className={styles.title}><b>Experiences:</b></h1>
                <Experiences query={query} />
            </div>
            <div className={styles.Publications}>
                <h1 className={styles.title}><b>Publications:</b></h1>
                <Publications query={query} />
            </div>
        </div>                          
    );
}
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Header from '../components/Header';
import '../components/Header.css';
import profileimg from '../../resources/profile_img.jpeg';
import './Mainpage.css';
import { FaGithub, FaLinkedin, FaBlogger } from 'react-icons/fa';


function Mainpage(props){
    const navi = useNavigate();
    const [modalOpenStates, setModalOpenStates] = useState([false, false, false, false, false, false]);

    // 특정 모달을 열기
    const openModal = (index) => {
        const newStates = [...modalOpenStates];
        newStates[index] = true;
        setModalOpenStates(newStates);
    };

    // 특정 모달을 닫기
    const closeModal = (index) => {
        const newStates = [...modalOpenStates];
        newStates[index] = false;
        setModalOpenStates(newStates);
    };

    return(
        <div>
            <Header/>
            <div className="mainpage-body">
                <div className="mainpage-body-left">
                    <img src={profileimg} alt="Profile" className="mainpage-body-profileimg" width="300px"/>


                    <div className="tech-stack-section">

                        {/* Language */}
                        <div className="tech-stack-category">
                            <h3>Language</h3>
                            <div className="tech-stack-items">
                                {["Java", "Python", "C", "C++", "Kotlin", "JavaScript", "Linux"].map((tech, index) => (
                                    <div key={index} className="tech-stack-item">{tech}</div>
                                ))}
                            </div>
                            {/* Frontend */}
                            <div className="tech-stack-category">
                                <h3>Frontend</h3>
                                <div className="tech-stack-items">
                                    {["React.js", "JSP", "jQuery", "Ajax", "JavaScript", "CSS", "HTML", "Bootstrap", "MaterialUI", "Android"].map((tech, index) => (
                                        <div key={index} className="tech-stack-item">{tech}</div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="tech-stack-category">
                                <h3>Backend</h3>
                                <div className="tech-stack-items">
                                    {["SpringBoot", "Express.js", "FastAPI", "Restful APIs", "Redis", "Kafka"].map((tech, index) => (
                                        <div key={index} className="tech-stack-item">{tech}</div>
                                    ))}
                                </div>
                            </div>

                            {/* Database/Infra */}
                            <div className="tech-stack-category">
                                <h3>Database/Infra</h3>
                                <div className="tech-stack-items">
                                    {["MySQL", "AWS", "Docker", "Kubernetes"].map((tech, index) => (
                                        <div key={index} className="tech-stack-item">{tech}</div>
                                    ))}
                                </div>
                            </div>

                            {/* AI/Data */}
                            <div className="tech-stack-category">
                                <h3>AI/Data</h3>
                                <div className="tech-stack-items">
                                    {["GPT", "Google TTS", "Spark"].map((tech, index) => (
                                        <div key={index} className="tech-stack-item">{tech}</div>
                                    ))}
                                </div>
                            </div>

                            {/* ETC */}
                            <div className="tech-stack-category">
                                <h3>ETC</h3>
                                <div className="tech-stack-items">
                                    {["Git", "Jenkins", "Postman", "Jira"].map((tech, index) => (
                                        <div key={index} className="tech-stack-item">{tech}</div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mainpage-body-contents">
                    <div className="mainpage-body-contents-introduction">
                        <h4>
                            Hi, I am Jake. I started my IT career at AWS Korea in 2020 as sales team intern.
                            But I wanted to understand deeply about customer's needs so I started to
                            study Computer Science. Now, I myself became a Software Engineer to solve problems
                            and drive real impact with IT products.
                            <br/><br/>
                            I will devote myself to understand business and technical challenges company is facing with
                            and solve the problems with corresponding technology.
                            <br/><br/>
                            I am now studying in University of San Francisco, focusing on AI and Computer Science.
                            <br/><br/>
                            <h3 style={{fontStyle: "italic"}}>Lets Work Hard, Have fun, and Make history!</h3>
                        </h4>
                    </div>

                    <br/>

                    <h2>Education & Work Experience</h2>
                    <ul>
                        <li style={{cursor: 'pointer'}} onClick={() => openModal(0)}>
                            <h3>University of San Francisco (2024.8 - 2026.5)</h3>
                            Masters of Science, Computer Science
                        </li>
                        <li style={{cursor: 'pointer'}} onClick={() => openModal(1)}>
                            <h3>FPT Software (2023.9 - 2024.3)</h3>
                            Software Engineer
                        </li>
                        <li style={{cursor: 'pointer'}} onClick={() => openModal(5)}>
                            <h3>Naver Cloud AIaaS Developer Bootcamp (2023.2 - 2023.8)</h3>
                            Full-stack developer bootcamp
                        </li>
                        <li style={{cursor: 'pointer'}} onClick={() => openModal(4)}>
                            <h3>Cyber University of Korea (2022.3 - 2024.2)</h3>
                            Bachelors in Engineering, Software Engineering
                        </li>
                        <li style={{cursor: 'pointer'}} onClick={() => openModal(2)}>
                            <h3>Amazon Web Services Korea (2020.7 - 2022.12)</h3>
                            Cloud Sales
                        </li>
                        <li style={{cursor: 'pointer'}} onClick={() => openModal(3)}>
                            <h3>Seoul National University (2013.3 - 2020.8)</h3>
                            Physical Education & Consumer Science
                        </li>
                    </ul>


                    {/* 모달 1 */}
                    {modalOpenStates[0] && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="modal-close" onClick={() => closeModal(0)}>&times;</span>
                                <h2>University of San Francisco</h2>
                                <p>I'm currently pursuing a Master of Science in Computer Science. <br/>
                                    I studied CS 601 principles of software development, and from next
                                    semester, I will work on AI classes.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* 모달 2 */}
                    {modalOpenStates[1] && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="modal-close" onClick={() => closeModal(1)}>&times;</span>
                                <h2>FPT Software</h2>
                                <p>Worked as a Software Engineer, delivering CloudService middleware module to transmit
                                    data between edge and data center.</p>
                            </div>
                        </div>
                    )}

                    {/* 모달 3 */}
                    {modalOpenStates[2] && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="modal-close" onClick={() => closeModal(2)}>&times;</span>
                                <h2>Amazon Web Services Korea</h2>
                                <p>Worked as a Cloud Sales Associate. Provided cloud solutions to customers, proposed
                                    AWS services, and increased AWS adoption among companies.</p>
                            </div>
                        </div>
                    )}

                    {/* 모달 4 */}
                    {modalOpenStates[3] && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="modal-close" onClick={() => closeModal(3)}>&times;</span>
                                <h2>Seoul National University</h2>
                                <p>Learned about how to analyze business and consumers. I joined a business strategy
                                    club and engaged in intensive learning for a year. During this time,
                                    I secured and successfully executed an industry-academia consulting project
                                    with QANDA, an educational startup, and Wemakeprice, an e-commerce company,
                                    to address and resolve critical business challenges.</p>
                            </div>
                        </div>
                    )}

                    {modalOpenStates[4] && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="modal-close" onClick={() => closeModal(4)}>&times;</span>
                                <h2>Cyber University of Korea</h2>
                                <p>Learned basics of Software Engineering including data structure, algorithm, operating
                                    system, database, network, web development, Cloud, and AI</p>
                            </div>
                        </div>
                    )}

                    {modalOpenStates[5] && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="modal-close" onClick={() => closeModal(5)}>&times;</span>
                                <h2>Naver Cloud AIaaS Developer Bootcamp</h2>
                                <p>1,032-hour coding bootcamp whose curriculum covered Java, JavaScript, CSS, HTML, JSP,
                                    Cloud, React, Spring Boot, Python, SQL, and Linux</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="social-icons">
                    <a href="https://github.com/kwohyuno" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon1"/>
                    </a>
                    <br/>
                    <br/>
                    <a href="https://www.linkedin.com/in/hkwon7/" target="_blank"
                       rel="noopener noreferrer">
                        <FaLinkedin className="social-icon2"/>
                    </a>
                    <br/>
                    <br/>
                    <a href="https://www.blogger.com/blog/posts/5016351991855630544?pli=1" target="_blank" rel="noopener noreferrer">
                        <FaBlogger className="social-icon3"/>
                    </a>
                </div>

            </div>


        </div>
    );
}

export default Mainpage;
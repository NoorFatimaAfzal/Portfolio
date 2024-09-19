import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.jpg";

import pythonImage from "../assets/img/python.jpeg"; 
import javaImage from "../assets/img/java.png";
import cppImage from "../assets/img/cpp.png"; 
import pytorchImage from "../assets/img/pytorch.jpeg"; 
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.jpeg";
import react from "../assets/img/react.png";
import git from "../assets/img/git.png";
import mongodb from "../assets/img/mdb.jpeg";
import sql from "../assets/img/sql.png";
import linux from "../assets/img/linux.png";
import tf from "../assets/img/tf.png";
import sk from "../assets/img/sk.png";
import flask from "../assets/img/flask.png";
import keras from "../assets/img/keras.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button className="custom-arrow-left" onClick={onClick}>
                <img src={arrow1} alt="Left Arrow" />
            </button>
        );
    };

    const CustomRightArrow = ({ onClick }) => {
        return (
            <button className="custom-arrow-right" onClick={onClick}>
                <img src={arrow2} alt="Right Arrow" />
            </button>
        );
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>I turn data into stories and insights with a passion for machine learning and deep learning.<br></br>Combining cutting-edge technology with creative problem-solving, I craft solutions that make a real difference.</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                                customLeftArrow={<CustomLeftArrow />}
                                customRightArrow={<CustomRightArrow />}
                            >
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Data Science</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Machine Learning</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Natural Language Processing</h5>
                                </div>
                            </Carousel>

                            {/* New carousel for skill icons */}
                            <Carousel
                                responsive={{
                                    ...responsive, // Inherit the existing responsive settings
                                    desktop: {
                                        ...responsive.desktop,
                                        items: 7 // Set the number of items for desktop
                                    }
                                }}
                                infinite={true} // Enable infinite looping
                                autoPlay={true} // Enable automatic sliding
                                autoPlaySpeed={1000} // Set very fast speed to simulate continuous movement
                                transitionDuration={3000} // Reduce the duration between transitions
                                arrows={false} // Disable manual arrows for smooth movement
                                removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrows on smaller devices
                                customTransition="transform 1s linear" // Smooth transition for continuous effect
                                className="owl-carousel owl-theme skill-icon-slider"
                                customLeftArrow={<CustomLeftArrow />}
                                customRightArrow={<CustomRightArrow />}
                            >
                                <div className="item">
                                    <img src={pythonImage} alt="Python" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={javaImage} alt="Java" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={cppImage} alt="C++" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={pytorchImage} alt="PyTorch" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={html} alt="HTML" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={css} alt="CSS" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={js} alt="JavaScript" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={react} alt="React" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={git} alt="Git" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="MongoDB" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={sql} alt="SQL" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={linux} alt="Linux" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={tf} alt="TensorFlow" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={sk} alt="Scikit-Learn" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={flask} alt="Flask" className="skill-icon" />
                                </div>
                                <div className="item">
                                    <img src={keras} alt="Keras" className="skill-icon" />
                                </div>
                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};
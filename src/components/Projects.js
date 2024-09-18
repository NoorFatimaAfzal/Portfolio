import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import DS1 from "../assets/img/DS1.jpg";
import DS2 from "../assets/img/DS2.jpg";
import DS3 from "../assets/img/DS3.jpg";
import DS4 from "../assets/img/DS4.jpg";
import DS5 from "../assets/img/DS5.jpg";
// import DS6 from "../assets/img/DS6.jpg";
import ML1 from "../assets/img/ML1.jpg";
import ML2 from "../assets/img/ML2.jpg";
import ML3 from "../assets/img/ML3.jpg";
import ML4 from "../assets/img/ML4.jpg";
import ML5 from "../assets/img/ML5.jpg";
import ML6 from "../assets/img/ML6.jpg";
import fron1 from "../assets/img/fron1.jpg";
import fron2 from "../assets/img/fron2.jpg";
import fron3 from "../assets/img/fron3.jpg";
import fron4 from "../assets/img/fron4.jpg";
import fron5 from "../assets/img/fron5.png";
import fron6 from "../assets/img/fron6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1 = [
    {
      title: "What's App Chat Analysis",
      description: "Data Cleaning, EDA, Data Visualization",
      imgUrl: DS1,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Movies Data Analysis",
      description: "Data Preprocessing, Outlier Detection, Missing Value Imputation",
      imgUrl: DS2,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Noble Prize Data Analysis",
      description: "Data Wrangling, Statistical Analysis, Data Visualization",
      imgUrl: DS3,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Crime Data Analysis",
      description: "Cleaing, Preprocessing, Data Visualization",
      imgUrl: DS4,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Olympics Data Analysis",
      description: "Data Cleaning, EDA, Data Visualization",
      imgUrl: DS5,
      link: "https://github.com/NoorFatimaAfzal"
    },
    // {
    //   title: "Portfolio Website",
    //   description: "UI/UX Design",
    //   imgUrl: DS6,
    //   link: "https://github.com/NoorFatimaAfzal"
    // }
  ];

  const projectsTab2 = [
    {
      title: "Movie Recommendation System",
      description: "Content Based Filtering",
      imgUrl: ML1,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Fake News Detection",
      description: "Natural Language Processing",
      imgUrl: ML2,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Number Classification",
      description: "Deep Learning",
      imgUrl: ML3,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Car Review Analysis",
      description: "Natural Language Processing",
      imgUrl: ML4,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Diabetes Prediction",
      description: "Machine Learning",
      imgUrl: ML5,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "House Price Prediction",
      description: "Regression Analysis",
      imgUrl: ML6,
      link: "https://github.com/NoorFatimaAfzal"
    }
  ];

  const projectsTab3 = [
    {
      title: "To Do App",
      description: "Add, Delete, Update Tasks",
      imgUrl: fron1,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Python based GUI",
      imgUrl: fron2,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "ECAT Quiz App",
      description: "MCQs, Timer, Score",
      imgUrl: fron3,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Encryption Decryption Tool",
      description: "Text Encryption",
      imgUrl: fron4,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Image Viewer",
      description: "Image Gallery",
      imgUrl: fron5,
      link: "https://github.com/NoorFatimaAfzal"
    },
    {
      title: "Calculator",
      description: "Python based GUI",
      imgUrl: fron6,
      link: "https://github.com/NoorFatimaAfzal"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Each project reflects my commitment to excellence and my ability to integrate technical skills with creative solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Data Science</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Machine Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Frontend Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    {/* First Tab with Projects */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projectsTab1.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Second Tab with Projects */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projectsTab2.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Third Tab with Projects */}
                    <Tab.Pane eventKey="third">
                      <Row>
                        {projectsTab3.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}

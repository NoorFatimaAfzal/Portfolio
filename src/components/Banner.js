import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Data Scientist", "ML Engineer", "Frontend Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`I'm Noor Fatima`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Data Scientist and Machine Learning Engineer with over 1 year of experience in developing and deploying machine 
                    learning models. Skilled in Python, scikit-learn, and data visualization tools, with expertise in data pre-processing, 
                    feature engineering, and model optimization.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <Row className="justify-content-center align-items-stretch"> {/* Ensure columns stretch equally */}
                  <Col xs={6} md={6} lg={6} xl={6}> {/* Adjust column sizes to match screen sizes */}
                    <div className="info-box">
                      <h3>Projects Completed</h3>
                      <p>15+</p>
                    </div>
                  </Col>
                  <Col xs={6} md={6} lg={6} xl={6}>
                    <div className="info-box">
                      <h3>Years of Experience</h3>
                      <p>1+</p>
                    </div>
                  </Col>
                  <Col xs={6} md={6} lg={6} xl={6}>
                    <div className="info-box">
                      <h3>Clients</h3>
                      <p>0+</p>
                    </div>
                  </Col>
                  <Col xs={6} md={6} lg={6} xl={6}>
                    <div className="info-box">
                      <h3>Reviews</h3>
                      <p>0+</p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Col>
        </Row>
      </Container>
    </section>
  );
};

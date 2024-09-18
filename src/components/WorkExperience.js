import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.jpg";

export const WorkExperience = () => {
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
      <button className="ex-arrow-left" onClick={onClick}>
        <img src={arrow1} alt="Left Arrow" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button className="ex-arrow-right" onClick={onClick}>
        <img src={arrow2} alt="Right Arrow" />
      </button>
    );
  };

  return (
    <section className="skill" id="work-experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Work Experience</h2>
              <p>I turn data into stories and insights with a passion for machine learning and deep learning.<br></br>Combining cutting-edge technology with creative problem-solving, I craft solutions that make a real difference.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                <div className="exitem">
                  <h5>ML Engineer Fellow</h5>
                  <p>Bytewise</p>
                  <p>June 2024 - Sep 2024</p>
                </div>
                <div className="exitem">
                  <h5>ML Engineer Intern</h5>
                  <p>DataLabb</p>
                  <p>March 2024 - Present</p>
                </div>
                <div className="exitem">
                  <h5>Frontend Developer</h5>
                  <p>DataLabb</p>
                  <p>March 2024 - Present</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Image" />
    </section>
  );
};

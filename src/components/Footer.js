import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://x.com/NoorFatimaAfzal?t=TqARvJq1l1U_M9A6ZBRD0g&s=09" className="social-icon" title="Twitter" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: "black" }} />
                </a>
                <a href="https://www.linkedin.com/in/noor-fatima-afzal" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "black" }}/>
                </a>
                <a href="https://github.com/NoorFatimaAfzal" className="social-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} style={{ color: "black" }}/>
                </a>
                <a href="https://www.kaggle.com/noorfatimaafzalbutt" className="social-icon" title="Kaggle" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faKaggle} style={{ color: "black" }}/>
                </a>
              </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
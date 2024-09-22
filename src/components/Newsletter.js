import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  const [articleLink, setArticleLink] = useState('');

  useEffect(() => {
    // List of your Medium articles
    const articles = [
      "https://medium.com/@noorfatimaafzalbutt/understanding-data-leakage-risks-and-remedies-in-machine-learning-7d91c7b27530",
      "https://medium.com/@noorfatimaafzalbutt/understanding-perceptron-loss-function-hinge-loss-binary-cross-entropy-and-the-sigmoid-function-bbb42d128ef6",
      "https://medium.com/@noorfatimaafzalbutt/the-perceptron-trick-a-simple-guide-to-training-a-perceptron-b298f7ca9509",
      "https://medium.com/@noorfatimaafzalbutt/understanding-the-perceptron-in-neural-networks-7ddc6a2eca9d",
      "https://medium.com/@noorfatimaafzalbutt/understanding-perceptron-loss-function-hinge-loss-binary-cross-entropy-and-the-sigmoid-function-bbb42d128ef6",
      "https://medium.com/@noorfatimaafzalbutt/understanding-the-perceptron-in-neural-networks-7ddc6a2eca9d",
      "https://medium.com/@noorfatimaafzalbutt/understanding-probability-distribution-definition-advantages-and-parameters-0ad85674f824",
    ];

    // Get the current day index (0-6, where 0 is Sunday and 6 is Saturday)
    const dayIndex = new Date().getDay();

    // Update the article link based on the current day
    setArticleLink(articles[dayIndex]);

  }, []);

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Check out today's article from my Medium:</h3>
            </Col>
            <Col md={6} xl={7}>
              <a href={articleLink} target="_blank" rel="noopener noreferrer">
                Read Today's Article
              </a>
            </Col>
          </Row>
        </div>
      </Col>
  );
}
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  const [articleLink, setArticleLink] = useState('');

  useEffect(() => {
    // List of your Medium articles
    const articles = [
      "https://medium.com/@noorfatimaafzalbutt/understanding-data-leakage-risks-and-remedies-in-machine-learning-7d91c7b27530?source=user_profile---------0----------------------------",
      "https://medium.com/@noorfatimaafzalbutt/understanding-perceptron-loss-function-hinge-loss-binary-cross-entropy-and-the-sigmoid-function-bbb42d128ef6?source=user_profile---------1----------------------------",
      "https://medium.com/@noorfatimaafzalbutt/understanding-probability-distribution-definition-advantages-and-parameters-0ad85674f824?source=user_profile---------5----------------------------",
      "https://medium.com/@noorfatimaafzalbutt/understanding-measures-of-dispersion-range-variance-standard-deviation-and-coefficient-of-ecc3c9af942a?source=user_profile---------8----------------------------",
      "https://medium.com/@yourid/article-5https://medium.com/@noorfatimaafzalbutt/statistics-for-machine-learning-types-of-statistics-population-vs-sample-and-types-of-data-3354214ebaa9?source=user_profile---------10----------------------------",
      "https://medium.com/@noorfatimaafzalbutt/outliers-detection-and-removal-using-iqr-method-e629aa8089a8?source=user_profile---------12----------------------------",
      "https://medium.com/@noorfatimaafzalbutt/outlier-detection-and-removal-using-z-score-method-8b6b804f8709?source=user_profile---------13----------------------------",
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

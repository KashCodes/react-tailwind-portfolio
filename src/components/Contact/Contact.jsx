import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "./Contact.styles.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">
        <i class="far fa-id-card fa-fw"></i> Contact Me
      </h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            {/* ************* */}
            {/* Email contact */}
            {/* ************* */}

            <div className="m-2">
              <a
                href="mailto:kashay@arbelo.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-success"
                  title="Kashay@Arbelo.me"
                >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>

            {/* **************** */}
            {/* LinkedIn contact */}
            {/* **************** */}

            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/kashay-arbelo-11b83a1b9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-primary"
                  title="Kashay@Arbelo.me"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            {/* *************** */}
            {/* Twitter contact */}
            {/* *************** */}

            <div className="m-2">
              <a href="https://twitter.com/KashCodes" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="KashCodes">
                <i class="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;
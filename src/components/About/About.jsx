import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/images/biopic.jpg";
import "./About.syles.css";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about raleway-font mt-16">
        <h1 className="pt-3 text-center font-details pb-3"><i class="fas fa-comment-dots fa-fw"></i> About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile Picture */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  rounded
                  fluid
                />
              </Row>
            </Col>
            {/* About be description */}
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded raleway-font">
                Salutations! I'm<strong>&nbsp; Kashay Arbelo,</strong>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni qui tenetur similique, odio, quisquam eligendi perferendis facere repudiandae iure, nam officia ipsum iusto amet saepe placeat? Ipsam consequatur adipisci nemo.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni qui tenetur similique, odio, quisquam eligendi perferendis facere repudiandae iure, nam officia ipsum iusto amet saepe placeat? Ipsam consequatur adipisci nemo.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni qui tenetur similique, odio, quisquam eligendi perferendis facere repudiandae iure, nam officia ipsum iusto amet saepe placeat? Ipsam consequatur adipisci nemo.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni qui tenetur similique, odio, quisquam eligendi perferendis facere repudiandae iure, nam officia ipsum iusto amet saepe placeat? Ipsam consequatur adipisci nemo.
                <br /> <br />
                
              </Row>
              {/* Links */}
              <Col className="d-flex justify-content-center flex-wrap pt-5">
                {/* Contact button */}
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-success">
                      Contact Me
                    </Button>
                  </a>
                </div>
                {/* Github */}
                <div>
                  <a
                    href="https://github.com/KashCodes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-secondary">
                      Github
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/kashay-arbelo-11b83a1b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/kashay-arbelo-11b83a1b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-danger">
                      My Resume
                    </Button>
                  </a>
                </div>
              </Col>
              <Row></Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { validateEmail } from '../../utils/helpers';

import "./Contact.styles.css";

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };


  return (
  <section>
 

    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">
        <i class="far fa-id-card fa-fw"></i> Contact Me
      </h1>
      <Jumbotron className="contact-jumbotron">
        <Row  className="justify-center">
          <div className="bg-indigo-900 text-white p-4 m-4 rounded-3xl">
            <h1 data-testid="h1tag">Send me a message...</h1>
            <form className="" id="contact-form" onSubmit={handleSubmit}>
              <div className="m-2 p-2 w-auto">
                <label  className="p-2 w-auto" htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
              </div>
              <div className="m-2 p-2 w-auto">
                <label  className="p-2 w-auto" htmlFor="email">Email address:</label>
                <input  className="p-2 w-auto" type="email" name="email" defaultValue={email} onBlur={handleChange} />
              </div>
              <div className="m-2 p-2 w-auto">
                <label  className="p-2 w-auto" htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
              </div>
              {errorMessage && (
                <div className="m-2 p-2 w-auto">
                  <p className="error-text p-2 w-auto">{errorMessage}</p>
                </div>
              )}
              <button data-testid="button" type="submit" className="bg-gray-900 rounded-full py-2 px-6">Submit</button>
            </form>
          </div> 
        </Row>
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
  </section>  
  );
};

export default Contact;
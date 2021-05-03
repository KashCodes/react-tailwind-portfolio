import React from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";



// ********
// Projects
// ********
import L_BudgetTracker from "../../assets/images/projects/budgetTracker.PNG";
import L_TeamProfileGen from "../../assets/images/projects/teamProfileGen.gif";
import L_CodingBootcamp from "../../assets/images/projects/codingbootcamp.PNG";
import L_TechBlog from "../../assets/images/projects/techblog.PNG";
import L_EmployeeTracker from "../../assets/images/projects/employeeTracker.gif";
import L_NoteTaker from "../../assets/images/projects/noteTaker.gif";
import L_SlyFox from "../../assets/images/projects/slyfox.jpg";
import L_ProReadmeGen from "../../assets/images/projects/readmeGen.gif";
import L_WeatherDashboard from "../../assets/images/projects/weatherDashboard.PNG";
import L_WorkDayScheduler from "../../assets/images/projects/workdayScheduler.PNG";
import L_PasswordGen from "../../assets/images/projects/passgen.PNG";
import L_Horiseon from "../../assets/images/projects/horiseon.PNG";



// ********
//  Skills
// ********
import L_HTML from "../../assets/images/skills/html-5.svg";
import L_CSS3 from "../../assets/images/skills/CSS3_logo.svg";
import L_BOOTSTRAP from "../../assets/images/skills/bootstrap-4.svg";
import L_JAVASCRIPT from "../../assets/images/skills/javascript.svg";
import L_JQUERY from "../../assets/images/skills/jquery.svg";
import L_AJAX from "../../assets/images/skills/ajax.svg";
import L_REST_API from "../../assets/images/skills/REST-API-icon.svg";
import L_MYSQL from "../../assets/images/skills/mysql.svg";
import L_NODE from "../../assets/images/skills/nodejs.svg";
import L_EXPRESS from "../../assets/images/skills/express.svg";
import L_HANDLEBARS from "../../assets/images/skills/handlebars.svg";
import L_MONGODB from "../../assets/images/skills/mongodb.svg";
import L_REDUX from "../../assets/images/skills/redux.svg";
import L_HEROKU from "../../assets/images/skills/heroku.svg";
import L_REACT from "../../assets/images/skills/react.svg";
import L_REACT_ROUTER from "../../assets/images/skills/react-router.svg";

import "./Projects.style.css";

const customTheme = createTheme(themes.default, {
  date: {
    backgroundColor: "#30b6f0",
  },
  marker: {
    borderColor: "#30b6f0",
  },
  timelineTrack: {
    backgroundColor: "#30b6f0",
  },
  urlButton: {
    backgroundColor: "#4C1D95",
  },
  imageText: {
    marginBottom: "10px",
    fontSize: "2rem",
    fontWeight: "900",
  },
});



function Project() {

  return (
    <div id="projects">
    <h1 className="pt-3 text-center font-details-b pb-3">
      <i class="fas fa-project-diagram"></i> PROJECTS
    </h1>
    <Timeline theme={customTheme}>
      <Events>
        {/* ******************** */}
        {/* Budget Tracker */}
        {/* ******************** */}

        <ImageEvent
          className="text-center"
          date="4/25/2021"
          text="Budget Tracker"
          src={L_BudgetTracker}
          alt="Budget Tracker"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> A dictionary/thesaurus
                      application for learners of the English language which
                      helps with collocations.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Provides definition of searched word</li>
                        <li>Provides synonym of searched word</li>
                        <li>Provides collocations of searched word</li>
                        <li>Provides phonetic script of searched word</li>
                        <li>Provides pronunciation audio of searched word</li>
                        <li>Saves previous searches</li>
                        <li>Dark Mode</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JQUERY}
                              alt="jQuery"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            jQuery
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_AJAX}
                              alt="AJAX"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            AJAX
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REST_API}
                              alt="REST API"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            REST API
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://bootcamp-projects.github.io/collocation-creation/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/Bootcamp-Projects/collocation-creation"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://1drv.ms/u/s!AsTLbKRukIANh44ANs2rVWMtAa79GQ?e=klvSU2"
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

        {/* ****************** */}
        {/* Team Profile Generator */}
        {/* ****************** */}

        <ImageEvent
          className="text-center"
          date="4/17/2021"
          text="Team Profile Generator"
          src={L_TeamProfileGen}
          alt="Team Profile Generator"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> The purpose of Sweati is
                      to keep track of your cardio, mindfulness, and strength
                      training but tracking the activity and the time you
                      spent doing it.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Create an account</li>
                        <li>Able to upload image</li>
                        <li>
                          Able to track cardio, mindfulness, and strength
                          activities.
                        </li>
                        <li>Use of timer</li>
                        <li>Able to make friends</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HANDLEBARS}
                              alt="Handlebars.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Handlebars
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE}
                              alt="Node.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Node.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="Express.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Express.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_MYSQL}
                              alt="MySQL"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            MySQL
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://sweati-fitness-app.herokuapp.com"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/vand-coding-bootcamp/sweati"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              {/* <UrlButton
                href=""
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton> */}
            </div>
          </div>
        </ImageEvent>
        
        {/* ******************** */}
        {/* Coding Bootcamp Survival Guide */}
        {/* ******************** */}

        <ImageEvent
          className="text-center"
          date="4/4/2021"
          text="Coding Bootcamp Survival Guide"
          src={L_CodingBootcamp}
          alt="Coding Bootcamp Survival Guide"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> A dictionary/thesaurus
                      application for learners of the English language which
                      helps with collocations.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Provides definition of searched word</li>
                        <li>Provides synonym of searched word</li>
                        <li>Provides collocations of searched word</li>
                        <li>Provides phonetic script of searched word</li>
                        <li>Provides pronunciation audio of searched word</li>
                        <li>Saves previous searches</li>
                        <li>Dark Mode</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JQUERY}
                              alt="jQuery"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            jQuery
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_AJAX}
                              alt="AJAX"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            AJAX
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REST_API}
                              alt="REST API"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            REST API
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://bootcamp-projects.github.io/collocation-creation/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/Bootcamp-Projects/collocation-creation"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://1drv.ms/u/s!AsTLbKRukIANh44ANs2rVWMtAa79GQ?e=klvSU2"
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

        {/* ****************** */}
        {/* Tech Blog */}
        {/* ****************** */}

        <ImageEvent
          className="text-center"
          date="3/21/2021"
          text="Tech Blog"
          src={L_TechBlog}
          alt="Tech Blog"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> The purpose of Sweati is
                      to keep track of your cardio, mindfulness, and strength
                      training but tracking the activity and the time you
                      spent doing it.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Create an account</li>
                        <li>Able to upload image</li>
                        <li>
                          Able to track cardio, mindfulness, and strength
                          activities.
                        </li>
                        <li>Use of timer</li>
                        <li>Able to make friends</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HANDLEBARS}
                              alt="Handlebars.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Handlebars
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE}
                              alt="Node.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Node.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="Express.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Express.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_MYSQL}
                              alt="MySQL"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            MySQL
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://sweati-fitness-app.herokuapp.com"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/vand-coding-bootcamp/sweati"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              {/* <UrlButton
                href=""
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton> */}
            </div>
          </div>
        </ImageEvent>

        {/* ********************** */}
        {/* Employee Tracker */}
        {/* ********************** */}

        <ImageEvent
          className="text-center"
          date="3/7/2021"
          text="Employee Tracker"
          src={L_EmployeeTracker}
          alt="Employee Tracker"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> A dictionary/thesaurus
                      application for learners of the English language which
                      helps with collocations.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Provides definition of searched word</li>
                        <li>Provides synonym of searched word</li>
                        <li>Provides collocations of searched word</li>
                        <li>Provides phonetic script of searched word</li>
                        <li>Provides pronunciation audio of searched word</li>
                        <li>Saves previous searches</li>
                        <li>Dark Mode</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JQUERY}
                              alt="jQuery"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            jQuery
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_AJAX}
                              alt="AJAX"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            AJAX
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REST_API}
                              alt="REST API"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            REST API
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://bootcamp-projects.github.io/collocation-creation/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/Bootcamp-Projects/collocation-creation"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://1drv.ms/u/s!AsTLbKRukIANh44ANs2rVWMtAa79GQ?e=klvSU2"
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton>
            </div>
          </div>
        </ImageEvent>
        
        {/* ******************** */}
        {/* Note Taker */}
        {/* ******************** */}

        <ImageEvent
          className="text-center"
          date="2/28/2021"
          text="Note Taker"
          src={L_NoteTaker}
          alt="Note Taker"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> A dictionary/thesaurus
                      application for learners of the English language which
                      helps with collocations.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Provides definition of searched word</li>
                        <li>Provides synonym of searched word</li>
                        <li>Provides collocations of searched word</li>
                        <li>Provides phonetic script of searched word</li>
                        <li>Provides pronunciation audio of searched word</li>
                        <li>Saves previous searches</li>
                        <li>Dark Mode</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JQUERY}
                              alt="jQuery"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            jQuery
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_AJAX}
                              alt="AJAX"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            AJAX
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REST_API}
                              alt="REST API"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            REST API
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://bootcamp-projects.github.io/collocation-creation/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/Bootcamp-Projects/collocation-creation"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://1drv.ms/u/s!AsTLbKRukIANh44ANs2rVWMtAa79GQ?e=klvSU2"
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

        {/* ****************** */}
        {/* Sly Is The Fox Trivia Game */}
        {/* ****************** */}

        <ImageEvent
          className="text-center"
          date="2/6/2021"
          text="Sly Is The Fox Trivia Game"
          src={L_SlyFox}
          alt="Sly Is The Fox Trivia Game"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> The purpose of Sweati is
                      to keep track of your cardio, mindfulness, and strength
                      training but tracking the activity and the time you
                      spent doing it.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Create an account</li>
                        <li>Able to upload image</li>
                        <li>
                          Able to track cardio, mindfulness, and strength
                          activities.
                        </li>
                        <li>Use of timer</li>
                        <li>Able to make friends</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HANDLEBARS}
                              alt="Handlebars.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Handlebars
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE}
                              alt="Node.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Node.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="Express.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Express.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_MYSQL}
                              alt="MySQL"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            MySQL
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://sweati-fitness-app.herokuapp.com"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/vand-coding-bootcamp/sweati"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              {/* <UrlButton
                href=""
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton> */}
            </div>
          </div>
        </ImageEvent>

        {/* ********************** */}
        {/* Professional ReadMe Generator */}
        {/* ********************** */}

        <ImageEvent
          className="text-center"
          date="2/14/2021"
          text="Professional README Generator"
          src={L_ProReadmeGen}
          alt="Professional README Generator"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> A dictionary/thesaurus
                      application for learners of the English language which
                      helps with collocations.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Provides definition of searched word</li>
                        <li>Provides synonym of searched word</li>
                        <li>Provides collocations of searched word</li>
                        <li>Provides phonetic script of searched word</li>
                        <li>Provides pronunciation audio of searched word</li>
                        <li>Saves previous searches</li>
                        <li>Dark Mode</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JQUERY}
                              alt="jQuery"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            jQuery
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_AJAX}
                              alt="AJAX"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            AJAX
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REST_API}
                              alt="REST API"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            REST API
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://bootcamp-projects.github.io/collocation-creation/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/Bootcamp-Projects/collocation-creation"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://1drv.ms/u/s!AsTLbKRukIANh44ANs2rVWMtAa79GQ?e=klvSU2"
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

        {/* ****************** */}
        {/* Weather Dashboard */}
        {/* ****************** */}

        <ImageEvent
          className="text-center"
          date="1/24/2021"
          text="Weather Dashboard"
          src={L_WeatherDashboard}
          alt="Weather Dashboard"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> The purpose of Sweati is
                      to keep track of your cardio, mindfulness, and strength
                      training but tracking the activity and the time you
                      spent doing it.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Create an account</li>
                        <li>Able to upload image</li>
                        <li>
                          Able to track cardio, mindfulness, and strength
                          activities.
                        </li>
                        <li>Use of timer</li>
                        <li>Able to make friends</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HANDLEBARS}
                              alt="Handlebars.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Handlebars
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE}
                              alt="Node.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Node.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="Express.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Express.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_MYSQL}
                              alt="MySQL"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            MySQL
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://sweati-fitness-app.herokuapp.com"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/vand-coding-bootcamp/sweati"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              {/* <UrlButton
                href=""
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton> */}
            </div>
          </div>
        </ImageEvent>

        {/* ********************** */}
        {/* Work Day Scheduler*/}
        {/* ********************** */}

        <ImageEvent
          className="text-center"
          date="1/17/2021"
          text="Work Day Scheduler"
          src={L_WorkDayScheduler}
          alt="Work Day Scheduler"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> A dictionary/thesaurus
                      application for learners of the English language which
                      helps with collocations.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Provides definition of searched word</li>
                        <li>Provides synonym of searched word</li>
                        <li>Provides collocations of searched word</li>
                        <li>Provides phonetic script of searched word</li>
                        <li>Provides pronunciation audio of searched word</li>
                        <li>Saves previous searches</li>
                        <li>Dark Mode</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JQUERY}
                              alt="jQuery"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            jQuery
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_AJAX}
                              alt="AJAX"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            AJAX
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REST_API}
                              alt="REST API"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            REST API
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://bootcamp-projects.github.io/collocation-creation/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/Bootcamp-Projects/collocation-creation"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://1drv.ms/u/s!AsTLbKRukIANh44ANs2rVWMtAa79GQ?e=klvSU2"
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

        {/* ****************** */}
        {/* Password Generator */}
        {/* ****************** */}

        <ImageEvent
          className="text-center"
          date="12/28/2020"
          text="Password Generator"
          src={L_PasswordGen}
          alt="Password Generator"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> The purpose of Sweati is
                      to keep track of your cardio, mindfulness, and strength
                      training but tracking the activity and the time you
                      spent doing it.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Create an account</li>
                        <li>Able to upload image</li>
                        <li>
                          Able to track cardio, mindfulness, and strength
                          activities.
                        </li>
                        <li>Use of timer</li>
                        <li>Able to make friends</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HANDLEBARS}
                              alt="Handlebars.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Handlebars
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE}
                              alt="Node.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Node.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="Express.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Express.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_MYSQL}
                              alt="MySQL"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            MySQL
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://sweati-fitness-app.herokuapp.com"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/vand-coding-bootcamp/sweati"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              {/* <UrlButton
                href=""
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton> */}
            </div>
          </div>
        </ImageEvent>

        {/* ********************** */}
        {/* Horiseon */}
        {/* ********************** */}

        <ImageEvent
          className="text-center"
          date="12/12/2020"
          text="Horiseon"
          src={L_Horiseon}
          alt="Horiseon"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <strong>PROJECT DETAILS</strong>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> The purpose of English
                      Experience is to give English Language Learners the
                      opportunity to practice English Online, giving them the
                      opportunity to improve their grammar and vocabulary.
                      Currently there are two levels, elementary and
                      intermediate. Students can sign in just using their
                      Google or Facebook accounts. Grammar activities have 10
                      multiple-choice questions in which they can practice
                      tenses and prepositions, two very difficult parts of the
                      English language to master. Vocabulary activities
                      consist of 15 multiple-choice questions in which users
                      can choose the topic they want to practice, e.g. home,
                      study, tranport, etc.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Create an account</li>
                        <li>Able to log in with Facebook or Goggle using OAuth</li>
                        <li>
                          Study English at the beginning, and elementary levels
                        </li>
                        <li>Take quizzes based on grammar or vocabulary</li>
                        <li>Able choose grammar points or vocabulary topics to study</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_BOOTSTRAP}
                              alt="Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REACT}
                              alt="React.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            React
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REACT_ROUTER}
                              alt="React Router"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            React-Router
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REDUX}
                              alt="Redux"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Redux
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="Express.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Express.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_MONGODB}
                              alt="MongoDB"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            MongoDB
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HEROKU}
                              alt="Heroku"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Heroku
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://esl-final-project.herokuapp.com"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/ESL-Experience/esl-project"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://youtu.be/MtTMnDhAcd4"
                target="_blank"
              >
                WATCH VIDEO
              </UrlButton>
            </div>
          </div>
        </ImageEvent>
      </Events>
    </Timeline>
  </div>
  );
}


export default Project;
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
import L_PortfolioGen from "../../assets/images/projects/ProfileGenerator.PNG"



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
import L_APOLLOGRAPHQL from "../../assets/images/skills/apollo-graphql.svg"
import L_REACT_BOOTSTRAP from "../../assets/images/skills/react-bootstrap.svg"


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


        {/* ****************** */}
        {/* Portfolio Generator */}
        {/* ****************** */}

        <ImageEvent
          className="text-center  text-purple-900 project-title"
          date="4/17/2021"
          text="Portfolio Generator"
          src={L_PortfolioGen}
          alt="Portfolio Generator"
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
                      <strong>Description:</strong> A sophisticated online portfolio is essential for every developer. In just minutes, this application creates a professional portfolio for you to to deploy to the web.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles p-3">
                        <li>Create a professional Developer Portfolio </li>
                        <li>Includes Skills List</li>
                        <li>
                          Includes Social Media 
                        </li>
                        <li>
                          Includes Projects List
                        </li>
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
                              src={L_MONGODB}
                              alt="Mongo DB"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Mongo DB
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REACT}
                              alt="React"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            React
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REACT_BOOTSTRAP}
                              alt="React Bootstrap"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            React Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_APOLLOGRAPHQL}
                              alt="Apollo Graph QL"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Apollo Graph QL
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
                href="https://dksv-portfolio-generator.herokuapp.com/"
                target="_blank"
              >
                LIVE SITE
              </UrlButton>
              <UrlButton
                href="https://github.com/Portfolio-Generator/Portfolio-Generator"
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
        {/* Budget Tracker */}
        {/* ******************** */}

        <ImageEvent
          className="text-center  text-purple-900 project-title"
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
                      <strong>Description:</strong> A budget tracker application where the user will be able to add expenses and deposits to their budget with or without a connection.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles p-3">
                        <li>Add Expenses</li>
                        <li>Add Income</li>
                        <li>Watch spending over time in a graph.</li>
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
                href="https://kashcode-budget-tracker.herokuapp.com/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/KashCodes/Budget-Tracker"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

        {/* ****************** */}
        {/* Team Profile Generator */}
        {/* ****************** */}

        <ImageEvent
          className="text-center  text-purple-900 project-title"
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
                      <strong>Description:</strong> A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles p-3">
                        <li>Inquirer</li>
                        <li>Create Team Profiles</li>
                        <li>
                          CML UI
                        </li>
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
                href="https://drive.google.com/file/d/1Css4udq3OncbN8SV17ETKTN_gyEraXpU/view"
                target="_blank"
              >
                SEE VIDEO
              </UrlButton>
              <UrlButton
                href="https://github.com/KashCodes/Team-Profile-Generator"
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
          className="text-center    text-purple-900 project-title"
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
                      <strong>Description:</strong> The Coding Bootcamp Survival Guide is a curated collection of resources to help you along your journey. We have everything from looking for help when picking a bootcamp, to what to do after it is done and you've crossed the Finish Line! Don't forget to create an account to save your favorite articles and resources to your personal profile.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles p-3">
                        <li>Create User Account</li>
                        <li>Like Posts</li>
                        <li>Comment on posts</li>
                        <li>View liked posts dashboard</li>
                        <li>Admin Users can create posts</li>
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
                              src={L_HANDLEBARS}
                              alt="Handlebars.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Handlebars.js
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
                              alt="Express"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Express
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
                href="https://coding-bootcamp-survival-guide.herokuapp.com/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/Coding-Bootcamp-Survival-Guide/Coding-Bootcamp-Survival-Guide"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://drive.google.com/file/d/1UL_enQS1NUaSNOnWEJRAG2vYJFQae5Vr/view"
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
          className="text-center   text-purple-900 project-title"
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
                      <strong>Description:</strong> Tech Blog that allows you to create a username and password to create and comment on blog posts.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles p-3">
                        <li>Create an account</li>
                        <li>Create posts</li>
                        <li>
                          Comment on posts
                        </li>
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
                href="https://kashcodes-tech-blog.herokuapp.com/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/KashCodes/Tech-Blog"
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
          className="text-center   text-purple-900 project-title"
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
                      <strong>Description:</strong> A Node.js command-line application that takes in and displays information about employees. It allows you to track and provide them an employee ID, Department, Role, and Salary. Then display's them in a clean table in the command-line.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>CML UI</li>
                        <li>MySQL/</li>
                        <li>Inquirer</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
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
                              src={L_MYSQL}
                              alt="MySQL"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            MySQL
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
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://github.com/KashCodes/Employee-Tracker"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://drive.google.com/file/d/1Z7pRX48OOCl4rLAsdxGaXBOqXjVnroVZ/view"
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
          className="text-center  text-purple-900 project-title"
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
                      <strong>Description:</strong> This is a note taking application. It will allow you to save a title and text. Once saved you'll be able to delete the stored saved notes as needed.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles p-3">
                        <li>Add/Edit</li>
                        <li>Listed Notes</li>
                        <li>Local Storage</li>
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
                              src={L_HEROKU}
                              alt="Heroku"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Heroku
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
                              alt="Express"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Express
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
                href="https://kashcodes-note-taker.herokuapp.com/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/KashCodes/Note-Taker"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

        {/* ****************** */}
        {/* Sly Is The Fox Trivia Game */}
        {/* ****************** */}

        <ImageEvent
          className="text-center text-purple-900 project-title"
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
                      <strong>Description:</strong> A Trivia Game using two API's. One for randomly generated trvia questions, and the other for randomly generated fox images.
                      <hr />
                      <strong>Instructions:</strong>
                      <ul className="list-styles p-3">
                        <li>Trivia game with random questions and fox pictures that are new with each game!</li>
                        <li>Any incorrect answers will penalize score/time by 10 seconds.</li>
                        <li>Correct answers will increase score/time by 10 seconds.
                        </li>
                        <li>If you run out of time, the quiz ends.</li>
                        <li>At the end of the quiz users are praised with falling confetti and have the choice to submit their high score to save in localStorage and then play again.</li>
                        <li>Scores are saved and can be viewed at anypoint by clicking “View High Scores”.</li>
                        <li>On the High Score screen users can view random Fox Facts.</li>
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
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
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
                href="https://sly-is-the-fox.github.io/Sly-Is-The-Fox/index.html"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/Sly-Is-The-Fox/Sly-Is-The-Fox"
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
          className="text-center text-purple-900 project-title"
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
                      <strong>Description:</strong> This Node.js application will help Web Developers to automatically generate a formated README.me file for any application they may have created.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles p-3">
                        <li>Title</li>
                        <li>Description:</li>
                        <li>Table of Contents</li>
                        <li>Installation</li>
                        <li>Usage</li>
                        <li>License</li>
                        <li>Contributors</li>
                        <li>Tests</li>
                        <li>Questions</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
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
                              src={L_NODE}
                              alt="Node.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            Node.js
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
                href="https://github.com/KashCodes/README-Generator"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
              <UrlButton
                href="https://drive.google.com/file/d/1ZcT_xT9xDOOrXDOjrFpcKALfTTh31Qqg/view"
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
          className="text-center text-purple-900 project-title"
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
                      <strong>Description:</strong> A Weather Dashboard that will show you the weather from across the world. This utilizes a weather API.
                      <hr />
                      <strong>Instructions:</strong>
                      <ul className="list-styles p-3">
                        <li>Search for a city and you will be presented with current and future conditions for that city and that city is added to the search history.</li>
                        <li>Each search will include the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index.</li>
                        <li>Additionally, the UV index will display a color that indicates whether the conditions are favorable, moderate, or severe.
                        </li>
                        <li>Below that you will see a 5-Day forecast that will show the date, an icon representation of weather conditions, the temperature, and the humidity.</li>
                        <li>If you click on a city from the search history it will display the same updated information.</li>
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
                              alt="jQuery.js"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            jQuery
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
                href="https://kashcodes.github.io/weather-dashboard/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/KashCodes/weather-dashboard"
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
          className="text-center text-purple-900 project-title"
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
                      <strong>Description:</strong> Click the timeblock you want to edit and click save when finished. Timeblocks will show a different color for past, present, and future timeblocks. All saved schedule changes will remain when the page is refreshed.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles p-3">
                        <li>Different Color Time Blocks</li>
                        <li>Add/Edit Options</li>
                        <li>Standard Work Day Schedule</li>
                        <li>Local Storage Save Options</li>
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
                        
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://kashcodes.github.io/Work-Day-Scheduler/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/KashCodes/Work-Day-Scheduler"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

        {/* ****************** */}
        {/* Password Generator */}
        {/* ****************** */}

        <ImageEvent
          className="text-center text-purple-900 project-title"
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
                      <strong>Description:</strong> A strong password generator to help you create robust passwords.
                      <hr />
                      <strong>Passwor Requirements:</strong>
                      <ul className="list-styles p-3">
                        <li>Between 8 - 128 characters</li>
                        <li>Lowercase Letters</li>
                        <li>Uppercase Letters
                        </li>
                        <li>Special Characters</li>
                        <li>Numerics/Numbers</li>
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
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            JavaScript
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
                href="https://kashcodes.github.io/Password-Gen/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/KashCodes/Password-Gen"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
            </div>
          </div>
        </ImageEvent>

        {/* ********************** */}
        {/* Horiseon */}
        {/* ********************** */}

        <ImageEvent
          className="text-center text-purple-900 project-title"
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
                      <strong>Description:</strong> A marketing agency that provides a multitude of options that will help promote and grow your business.
                      <hr />
                      <strong>Features Information On:</strong>
                      <ul className="list-styles p-3">
                        <li>Search Engine Optimization</li>
                        <li>Online Reputation Management</li>
                        <li>Social Media Marketing
                        </li>
                        <li>Lead Generation</li>
                        <li>Brand Awareness</li>
                        <li>Cost Management</li>
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
                        
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://kashcodes.github.io/horiseon/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/KashCodes/horiseon"
                target="_blank"
              >
                SOURCE CODE
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
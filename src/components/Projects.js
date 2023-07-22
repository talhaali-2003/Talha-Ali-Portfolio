import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCards';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  const projects = [
    {
      title: "AI Lawyer ChatBot",
      description: "OpenAI API: HTML & C++",
      imgUrl: projImg1,
    },
    {
      title: "Monty Hall Problem Simulation",
      description: "Java & Java FX",
      imgUrl: projImg2,
    },
    {
      title: "Tic - Tac - Toe",
      description: "C++",
      imgUrl: projImg3,
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <h2>Projects</h2>
                <p>Every project I have worked on since I started my career in Computer Science can be found right here. All of my projects can be found on my github, by pressing the connect with me button at the top. This list will increase as I work on more projects so be sure to stay updated.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="project-tabs" defaultActiveKey="/home">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>No projects on this tab.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>No projects on this tab.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

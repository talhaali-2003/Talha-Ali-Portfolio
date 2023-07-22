import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../assets/img/IMG_7795_adobe_express.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = [ "Future Software Engineer", "Web Designer", "Future Full Stack Developer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      } 
    }  
  return (
    <section className="banner" id="home">
    <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm Talha A`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Future Software Engineer", "Future Full Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                <p>Im a junior at Wayne State Univeristy majoring in computer science. I plan to become a software engineer and aquire a masters degree in AI in the future. I built this website from scratch using react and launched it through pages from github, all of my relevant information can be found here.</p>
            </div>}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={headerImg} alt="Header Img"/>
              </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
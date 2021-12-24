import './about.css';
import aboutImg from '../../images/about.jpg';
import certificate from '../../images/Certificate.png';
import diploma from '../../images/Diploma.png';
import cyber from '../../images/Cybersicurity.png';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <>
      <Header />
      <div className="a">
        <div className="a-left">
          <div className="a-card-bg"></div>
          <div className="a-card">
            <img src={aboutImg} alt="about" className="a-img" />
          </div>
        </div>

        <div className="a-right">
          <h1 className="a-r-title">About Me</h1>

          <div className="a-r-qualification">
            <div className="a-r-card">
              <div className="card-flip">
                <div className="flip-front">
                  <img src={diploma} alt="Diploma" className="a-r-img" />
                </div>
                <div className="flip-back">
                  <h1 className="flip-topic">
                    Diploma in Information Technology
                  </h1>
                  <h2 className="flip-sub-topic">
                    Vocational Training Authority, Sri Lanka
                  </h2>
                  <p className="flip-desc">Graduated in 2021</p>
                </div>
              </div>
            </div>

            <div className="a-r-card">
              <div className="card-flip">
                <div className="flip-front">
                  <img src={cyber} alt="Cyber Security" className="a-r-img" />
                </div>
                <div className="flip-back">
                  <h1 className="flip-topic">Introduction to Cyber Security</h1>
                  <h2 className="flip-sub-topic">CISCO Networking Academy</h2>
                  <p className="flip-desc">Certificated in 2020</p>
                </div>
              </div>
            </div>

            <div className="a-r-card">
              <div className="card-flip">
                <div className="flip-front">
                  <img
                    src={certificate}
                    alt="Certificates"
                    className="a-r-img"
                  />
                </div>
                <div className="flip-back">
                  <h1 className="flip-topic">
                    Certificate in Web Designing & Developing
                  </h1>
                  <hr />
                  <h1 className="flip-topic">Introduction to ReactJS</h1>
                  <h2 className="flip-sub-topic">Udemy Academy</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="a-r-skills">
            <h2>My Skills</h2>
            <p>Front-End Web Designing</p>
            <div class="container">
              <div class="skills front">95%</div>
            </div>

            <p>Back-End Web Designing</p>
            <div class="container">
              <div class="skills back">90%</div>
            </div>

            <p>Photoshop & Image Editing</p>
            <div class="container">
              <div class="skills ps">70%</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

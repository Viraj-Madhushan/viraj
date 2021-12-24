import './intro.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import myImg from '../../images/MyImage1NoBG.png';

const Intro = () => {
  return (
    <>
      <Header />

      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2>Hello My Name is</h2>
            <h1 className="i-name">Viraj Madhushan</h1>

            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item"> Web Developer</div>
                <div className="i-title-item"> UI/UX Designer</div>
                <div className="i-title-item"> WordPress Developer</div>
                <div className="i-title-item"> Content Creator</div>
                <div className="i-title-item"> Logo Designer</div>
                <div className="i-title-item"> Web Application Developer</div>
              </div>
            </div>

            <p>
              I'm a full stack web developer, who has a passion to innovate new
              things & also, prototyped lots of production by myself. I have
              good experience with web development and UX/UI designing.
              Passionate about building world-class web applications. Also, I
              actively contributed so many GitHub repositories in my free times.
            </p>
          </div>
        </div>

        <div className="i-right">
          <div className="i-right-bg">
            <img src={myImg} alt="viraj" className="i-right-img" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Intro;

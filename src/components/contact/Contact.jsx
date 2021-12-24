import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false); //to set form state into not send

  //use to handle submit button
  const handleSubmit = (e) => {
    e.preventDefault(); // when click the submit button, page will not refresh

    //copied from emailjs react page
    emailjs
      .sendForm(
        'service_xoopldh',
        'template_5b2bi6g',
        formRef.current,
        'user_8hi3JiGOSzr0KlNsxQyA8'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //Clear text field after submitted
  function clearAll() {
    swal('Done!', 'Thanks for your message!', 'success');

    document.getElementById('user_name').value = '';
    document.getElementById('user_subject').value = '';
    document.getElementById('user_email').value = '';
    document.getElementById('user_message').value = '';
  }

  return (
    <>
      <Header />
      <div className="c">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title"> Let's Talk </h1>
            <div className="c-info">
              <div className="c-info-item">
                <FontAwesomeIcon icon={faPhone} className="c-icon" />
                +94 78 2682516
              </div>
              <div className="c-info-item">
                <FontAwesomeIcon icon={faEnvelope} className="c-icon" />
                creativewebs.business@gmail.com
              </div>
              <div className="c-info-item">
                <FontAwesomeIcon icon={faMapMarker} className="c-icon" />
                340, Palamagoda, Rathgama, Sri Lanka.
              </div>
            </div>
          </div>

          <div className="c-right">
            <p className="c-desc">
              Keep it connected. Contact me for get more information about me or
              my work. I'm happy to help you. Feel free to contact me through
              E-mail or Phone and I will be sure to get back to you as soon as
              posiible.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Your Name"
                required
              />
              <input
                type="subject"
                name="user_subject"
                id="user_subject"
                placeholder="Subject"
                required
              />
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="E-Mail"
                required
              />
              <textarea
                name="user_message"
                id="user_message"
                cols="15"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <button>Submit</button>
              {done && clearAll()}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

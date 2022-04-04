import Layout from "../components/Layout";
import Section from "../components/Section";

import data from "../data";

const Contact = () => {
  const {intro} = data.contact;
  return (
    <Layout pageTitle="Contact">
      <Section
        id={intro.id}
        title={intro.title}
        imageSrc={intro.imageSrc}
        >
        <div className="contact-intro">{intro.intro}</div>
        <div className="contact-abstract">{intro.abstract}</div>
        <form className="contact-form" id="">
          <div className="contact-information">
            <div className="personal-information">
              <div className="contact-group-button">
                <label htmlFor="name" className="labels">Name</label>
                <input type="text" id="name" className="inputField" autoComplete="off" required/>
              </div>
              <div className="contact-group-button">
                <label htmlFor="email" className="labels">Email</label>
                <input type="email" id="email" className="inputField" autoComplete="off" required/>
              </div>
            </div>
            <div className="subject-information">
              <div className="contact-group-button">
                <label htmlFor="name" className="labels">Subject</label>
                <input type="text" id="subject" className="inputField" autoComplete="off" required/>
            </div>
          </div>
          </div>
          <div className="contact-message">
            <label htmlFor="message" className="labels">
              Message
            </label>
            <textarea id="message"  className="message"  placeholder="Hello ..." required>
            </textarea>
          </div>
          <a href="#" className="submit-button">
            Send
          </a>
          
        </form>
        <div className={intro.addressTitle} id={intro.addressTitle}> 
          <div className="contact-title-address">
            {intro.addressTitle}
          </div>
          <div className="contact-address">
            {intro.address}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;

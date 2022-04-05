import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";

import data from "../data";

const Contact = () => {
  const {intro} = data.contact;
  return (
    <Layout pageTitle="Contact">
      
      <Section id={intro.id}>
        <div className="contact-main-title">{intro.title}</div>
        <div className="contact-response">
          <div className="contact-wrapper-response">
            <div className="contact-text-response">
              {intro.appreciation}
            </div>
            <div className="contact-message-response">
              {intro.contactMessage}
            </div>
            <BottomLink path="/" text="Back home" />
          </div>
        </div>
      </Section>
      <Section id="contact-background">
      </Section>
      <Section id="contact-your-story">
        <div className="contact-text-title">
          We want to hear your story
        </div>
        <div className="contact-intro">{intro.intro}</div>
        <div className="contact-abstract">{intro.abstract}</div>
      </Section>
      <Section id="contact-form">
        <form className="contact-form" id="">
          <div className="contact-information">
            <div className="contact-personal-information">
              <div className="contact-group-button">
                <label htmlFor="name" className="labels">Name</label>
                <input type="text" id="name" className="inputField" autoComplete="off" required/>
              </div>
              <div className="contact-group-button">
                <label htmlFor="email" className="labels">Email</label>
                <input type="email" id="email" className="inputField" autoComplete="off" required/>
              </div>
            </div>
            <div className="contact-subject-information">
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
        <div className="contact-address" id={intro.addressTitle}> 
          <div className="contact-title-address">
            {intro.addressTitle}
          </div>
          <div className="contact-address-text">
            {intro.address}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;

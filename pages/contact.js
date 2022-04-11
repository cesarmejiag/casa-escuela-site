import React from "react";
import { useForm } from "react-hook-form";

import Layout from "../components/Layout";
import Section from "../components/Section";
import BottomLink from "../components/BottomLink";
import BackgroundColor from "../components/BackgroundColor";

import data from "../data";

const Contact = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };

  const {intro} = data.contact;

  return (
    <Layout pageTitle="Contact">
      
      <Section id={intro.id}>
        <div className="contact-main-title">{intro.title}</div>
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
        <BackgroundColor cSrc="/images/backColor-1.svg" cColor="#b96241" cHeight="75%">
        </BackgroundColor>
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
        <form className="contact-form" id="" onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-information">
            <div className="contact-personal-information">
              <div className="contact-group-button">
                <label htmlFor="name" className="labels">Name</label>
                <input type="text" id="name" className="inputField" {...register("Last name", { required: true, maxLength: 30 })}/>
              </div>
              <div className="contact-group-button">
                <label htmlFor="email" className="labels">Email</label>
                <input type="text" id="email" className="inputField" {...register("Email", {
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}/>
              </div>
            </div>
            <div className="contact-subject-information">
              <div className="contact-group-button">
                <label htmlFor="name" className="labels">Subject</label>
                <select name="Title" {...register("title", { required: true })} className="inputField">
                  <option value="Collaborate">Collaborate</option>
                  <option value="Stay with us">Stay with us</option>
                  <option value="Host an event">Host an event</option>
                  <option value="Sayab">Sayab</option>
                  <option value="Residencies">Residencies</option>
                  <option value="Shop">Shop</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="General Inquiries">General Inquiries</option>
                  <option value="Press">Press</option>
                  <option value="Visit Gallery">Visit Gallery</option>
                </select>
            </div>
          </div>
          </div>
          <div className="contact-message">
            <label htmlFor="message" className="labels">
              Message
            </label>
            <textarea id="message"  className="message"  placeholder="Hello ..." {...register("message", { required: true, maxLength: 100 })}>
            </textarea>
          </div>
          <div className="contact-wrapper-submit">
            <input type="submit" value="Send" className="submit-button"   />
          </div>
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

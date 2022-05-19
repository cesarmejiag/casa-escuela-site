import sanityClient from "../client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import BlockContent from "@sanity/block-content-to-react";

import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Section from "../components/Section";
import ImageSwicher from "../components/ImageSwicher";
import InviewElement from "../components/InviewElement";
import BackgroundColor from "../components/BackgroundColor";
import { findContentBySlug, findContentByType } from "../utils/utils";

import data from "../data";

const initFormState = { loading: false, data: undefined, error: undefined };

export async function getServerSideProps({ locale }) {
  const data = await sanityClient.fetch(
    `*[_type == "page" && slug.current == "contact"][0]{
      slug,
      "title": title[$lang],
      content,
      "description": description[$lang],
      openGraphImage
    }`,
    { lang: locale }
  );

  return {
    props: {
      data,
    },
  };
}

const Contact = ({ data: sectionsData, globalConfig }) => {
  const { locale } = useRouter();
  const [formState, setFormState] = useState({ ...initFormState });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (contactData) => {
    setFormState({ ...initFormState, loading: true });

    try {
      // const endpoint = `/api/contact`;
      const endpoint = `https://www.goplek.com/mailer/send-mail-v1.php`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `data=${JSON.stringify({
          host: "casaescuela.mx",
          data: contactData,
        })}`,
      });
      const data = await res.text();

      setFormState({ ...initFormState, data });
    } catch (error) {
      setFormState({ ...initFormState, error });
    }

    setTimeout(() => {
      setFormState(initFormState);
    }, 3000);
  };

  const { title, description, content, openGraphImage } = sectionsData;
  const { intro } = data.contact;

  const introSanity = findContentBySlug("contact", content);
  const weWant = findContentBySlug("we-want-to-hear-your-story", content);
  const address = findContentByType("address", content);

  return (
    <Layout
      pageConfig={{ title, description, openGraphImage }}
      globalConfig={globalConfig}
    >
      {/* Contact */}
      <Section
        id={introSanity.slug.current}
        title={introSanity?.title?.[locale]}
        noHolder
        withMarginTop
      >
        <InviewElement>
          <div className="contact-intro-image">
            <ImageSwicher
              imagesSrc={introSanity.desktopImages}
              mobileImagesSrc={introSanity.mobileImages}
            />
          </div>
        </InviewElement>
      </Section>

      <BackgroundColor
        cSrcD="/images/bckContactD.svg"
        cSrcM="/images/bckContactM.svg"
        cColor="#ecf0f8"
        cHeight="100%"
      >
        <Section id="contact-your-story">
          <div className="contact-intro-body">
            <InviewElement>
              <div className="section-body text-center">
                <BlockContent blocks={weWant?.body?.[locale]} />
              </div>
            </InviewElement>
          </div>
        </Section>
      </BackgroundColor>

      {/* Form */}
      <Section id="contact-form">
        <div
          className={`contact-response${
            formState.data || formState.loading ? " displayed" : ""
          }`}
        >
          <div className="contact-wrapper-response">
            <div className="contact-text-response">
              {formState.loading ? "Enviando..." : intro.appreciation}
            </div>
            {formState.data && (
              <div className="contact-message-response">
                {intro.contactMessage}
                <div className="contact-link-response">
                  <Link href="/">
                    <a>Back home</a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Contact Form */}
        <InviewElement>
          <form
            className="contact-form"
            id=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="contact-information">
              <div className="contact-personal-information">
                <div className="contact-group-button">
                  <label htmlFor="name" className="labels">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputField"
                    {...register("name", { required: true, maxLength: 30 })}
                  />
                  {errors?.name?.type === "required" && (
                    <p className="errorMessage">This field is required</p>
                  )}
                </div>
                <div className="contact-group-button">
                  <label htmlFor="email" className="labels">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="inputField"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  {errors?.email?.type === "required" && (
                    <p className="errorMessage">This field is required</p>
                  )}
                </div>
              </div>
              <div className="contact-subject-information">
                <div className="contact-group-button">
                  <label htmlFor="name" className="labels">
                    Subject
                  </label>
                  <select
                    {...register("subject", { required: true })}
                    className="inputField"
                  >
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
              <textarea
                id="message"
                className="message"
                placeholder="Hello ..."
                {...register("message", { required: true, maxLength: 100 })}
              ></textarea>
              {errors?.message?.type === "required" && (
                <p className="errorMessage">This field is required</p>
              )}
            </div>
            <div className="contact-wrapper-submit">
              <input type="submit" value="Send" className="submit-button" />
            </div>
          </form>
        </InviewElement>
        {address.address && (
          <InviewElement>
            <div className="contact-address" id={intro.addressTitle}>
              <div className="contact-title-address">
                {address?.title?.[locale]}
              </div>
              <div
                className="contact-address-text"
                dangerouslySetInnerHTML={{ __html: address?.address?.[locale] }}
              ></div>
            </div>
          </InviewElement>
        )}
      </Section>

      <style jsx>{`
        .contact-intro-image {
          height: 450px;
          position: relative;
        }

        .contact-intro-body {
          margin: 0 auto;
          max-width: 486px;
        }

        @media screen and (min-width: 768px) {
          .contact-intro-image {
            height: 700px;
            margin-top: 100px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Contact;

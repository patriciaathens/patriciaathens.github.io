import React, { Component } from "react";
import { Layout } from "../components/layout";

const About = () => {
  return (
    <Layout>
      <main className="rounded d-flex flex-column">
        <section className="p-2">
          <h1>Who am I?</h1>
          <p>
            Professionally, I graduated from Rensselaer Polytechnic Institute
            with a B.S. in Computer Science & Internet Technology Web Sciences
            with a concentration in AI & Data. Aside from those majors, as a
            previous Design Innovation Society major, I have a lot of experience
            working with different design processes and developing my own unique
            style as a designer.
          </p>
          <p>
            But I do so much more than just programming. Over the past few
            years, I’ve had the opportunity to work on the front-end, back-end,
            & UX/UI development for websites. Lastly, I’ve worked a LOT of group
            projects, making me an efficient leader and a communicative team
            member.
          </p>
        </section>
        <section className="p-2">
          <h1>Skills & Experience</h1>

          <p>
            I'm passionate about creating designs that are colorful and clean. I
            specialize in frontend design, having expertise in a variety of
            frontend frameworks in addition to the basic HTML, CSS, &
            JavaScript. My fullstack developer experience means that I'm
            familiar with multiple backend languages and databases.
          </p>
          <p className="small-text">
            <span className="badge badge-pill badge-blue">Front End</span>HTML,
            CSS, SASS, JavaScript, Bootstrap, Material, Angular, ReactJS, Gatsby
          </p>
          <p className="small-text">
            <span className="badge badge-pill badge-blue">Back End</span>Python,
            SQL, PHP, Node.js
          </p>
          <p className="small-text">
            <span className="badge badge-pill badge-blue">Databases</span>
            MySQL/MariaDB, MongoDB
          </p>
          <p className="small-text">
            <span className="badge badge-pill badge-blue">Other</span>Figma,
            Canva, Adobe Illustrator & Photoshop, Microsoft Office, Google Drive
          </p>
        </section>
        <section className="p-2">
          <h1>Where to Find Me</h1>
          <ul className="contact-list">
            <li>
              <a href="https://github.com/patriciaathens" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/patriciaathensacorda/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto: patricia.acorda@gmail.com" target="_blank">
                Email
              </a>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default About;

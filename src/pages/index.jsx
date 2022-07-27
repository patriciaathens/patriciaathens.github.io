import React, { Component } from "react";
import { Layout } from "../components/layout";
// import $ from jQuery;

const Main = () => {
  return (
    <Layout>
      <main className="rounded d-flex justify-content-around align-items-stretch">
        <section className="p-2">
          <h1>
            Hello! <br />
            My name is <span className="name">Patricia Acorda</span>
          </h1>
          <h2>
            I'm a Computer Science graduate with a focus in Website Development
            & UI/UX Design.
          </h2>
          <p class="highlight-red">
            I'm looking for work around the end of August 2022.
          </p>
          <p>
            I currently work as the{" "}
            <span class="highlight-blue">Sci.CORPS Instructor</span> at the Yale
            Peabody Museum under the EVOLUTIONS Program!
          </p>
          <p>
            I <span class="highlight-blue">manage and guide</span> over 15 High
            School staff members in creating projects to aid their science
            communication skills and build a safe community to break down some
            of the barriers that youths face when pursing a career in STEM. I
            also <span class="highlight-blue">create and teach</span> basic web
            development curriculum to the staff, who have a wide range of skill
            sets. This is all to help passionate staff in building up the
            program's website. You can learn more about the EVOLUTIONS program{" "}
            <a href="https://peabody.yale.edu/evo" target="_blank">
              on the Peabody website
            </a>{" "}
            or{" "}
            <a href="https://evolutions.peabody.yale.edu/" target="_blank">
              visit our own website
            </a>
            !
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default Main;

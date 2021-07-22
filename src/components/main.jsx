import React, { Component } from 'react';

const Main = () => {
    return (
        <main className="rounded d-flex justify-content-around align-items-stretch">
            <section className="p-2">
                <h1>Hello! <br/>My name is <span className="name">Patricia Acorda</span></h1>
                <h2>I'm a Computer Science graduate with a focus in Website Development & UI/UX Design.</h2>
                {/* <p>
                    I graduated from Rensselaer Polytechnic Institute with a B.S. in Computer Science & Internet Technology Web Sciences with a concentration in AI & Data.
                    As a previous Design Innovation Society major, I have a lot of experience working with different design processes and developing my own unique style as a designer.
                    I've been working in several team projects a year since the beginning of my time at college, making me an efficient leader and a communicative team member.
                </p> */}
            </section>
        </main>
    );
}

export default Main;
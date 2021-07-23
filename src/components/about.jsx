import React, { Component } from 'react';

const About = () => {
    return (
        <main className="rounded d-flex flex-column">
            <section className="p-2">
                <h1>Who am I?</h1>
                <p>
                    I graduated from Rensselaer Polytechnic Institute with a B.S. in Computer Science & Internet Technology Web Sciences with a concentration in AI & Data.
                    As a previous Design Innovation Society major, I have a lot of experience working with different design processes and developing my own unique style as a designer.
                    I've also been working in several team projects a year since the beginning of my time at college, making me an efficient leader and a communicative team member.
                </p>
            </section>
            <section className="p-2">
                <h1>Skills & Experience</h1>
                <p>
                    I've worked as a fullstack developer for 3 years on multiple college projects, including sponsored projects from United Airlines and St.Paul's Catholic School.
                </p>
                <p>
                    I focus on creating websites that are intuitive and clean, with reusable and organized code. I specialize in frontend design, having expertise in a variety of frontend frameworks in addition to the basic HTML, CSS, & JavaScript.
                    My fullstack developer experience means that I'm familiar with multiple backend languages and databases.
                </p>
                <p className="small-text"><span className="badge badge-pill badge-blue">Front End</span>HTML, CSS, SASS, JavaScript, Bootstrap, Material, Angular, ReactJS</p>
                <p className="small-text"><span className="badge badge-pill badge-blue">Back End</span>Python, SQL, PHP, Node.js</p>
                <p className="small-text"><span className="badge badge-pill badge-blue">Databases</span>MySQL/MariaDB, MongoDB</p>
            </section>
        </main>
    );
}
 
export default About;
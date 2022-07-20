import React, { Component } from 'react';
import Project from './project';

import EVOLUTIONS_homepage from '../images/mockups/evolutions/homepage_mockup.png';
import EVOLUTIONS_scicorps from '../images/mockups/evolutions/scicorpsCROP_mockup.png';
import EVOLUTIONS_team from '../images/mockups/evolutions/teamCROP_mockup.png';

import UCLEAN_login from '../images/mockups/uclean/login_mockup.png';
import UCLEAN_airplanelist from '../images/mockups/uclean/airplanelist_mockup.png';
import UCLEAN_airplane from '../images/mockups/uclean/airplane_mockup.png';
import UCLEAN_tasklist from '../images/mockups/uclean/tasklist_mockup.png';

import RM_frontpage from '../images/mockups/resumanager/frontpage_mockup.png';
import RM_library from '../images/mockups/resumanager/library_mockup.png';

class Projects extends Component {
    state = {
        projects: [
            {
                id: 1,
                title: "EVOLUTIONS Website",
                type: "Website UX/UI Design",
                employer: "Yale Peabody Museum for EVOLUTIONS Program",
                year: "2022",
                blurb: "Currently working as a UX/UI Designer/Brand Design, team of 1",
                desc: "The previous website is getting old and needs a redesign when ported to a future version of Drupal. We need a wireframe for the redesign of the new website for when we can outsource the building or build it ourselves in the future.",
                myrole: "I did brand analysis of the website and redefined the important parts of the EVOLUTIONS program to put onto the new website. I also created a high fidelity wireframe and style guide for the new site.",
                // github: "",
                report: "",
                mockups: [
                    {
                        mockup_image:  EVOLUTIONS_scicorps,
                        mockup_caption: "EVOLUTIONS What is Sci.CORPS laptop view",
                        mockup_type: "laptop"
                    },
                    {
                        mockup_image:  EVOLUTIONS_team,
                        mockup_caption: "EVOLUTIONS Meet the Team laptop view",
                        mockup_type: "laptop"
                    }
                ],
                challenges: "Aside from doing this solo, the biggest challenge was trying to create a website with a totally unique atmosphere. The goal was to create a website that felt like one representing a safe and fun science community. One that catered torwards a younger audience but also didn't feel too 'kid-like'. With feedback from my boss, the director of the program, we settled on utilizing the bright logo colors across the website as well as incorporating lots of soft shapes and images."   
            },
            {
                id: 2,
                title: "UClean",
                type: "Phone App",
                employer: "United Airlines for ITWS Capstone",
                year: "2021",
                blurb: "Worked as a Fullstack Developer, team of 5",
                desc: "UClean is built to be used by United Airline cleaning agents. Lists all tasks needed for each airplane cleaning job so that cleaning agents can easily guide cleaning crew members to efficiently prepare each airplane for its next flight.",
                myrole: "I worked to help organize an complex database for holding the airplane cleaning information required and build the connections for the website to pull data from the databse.",
                // github: "https://github.com/galexford/UClean",
                report: "https://drive.google.com/file/d/1QRGSZzoznyEAo7W9DImeAEI5YkXXkKKO/view?usp=sharing",
                mockups: [
                    {
                        mockup_image:  UCLEAN_login,
                        mockup_caption: "UClean login phone view",
                        mockup_type: "phone"
                    },
                    {
                        mockup_image:  UCLEAN_airplanelist,
                        mockup_caption: "UClean airplane list phone view",
                        mockup_type: "phone"
                    },
                    {
                        mockup_image:  UCLEAN_airplane,
                        mockup_caption: "UClean airplane info phone view",
                        mockup_type: "phone"
                    },
                    {
                        mockup_image:  UCLEAN_tasklist,
                        mockup_caption: "UClean airplane task list phone view",
                        mockup_type: "phone"
                    }
                ],
                challenges: "The biggest challenge for me in this project was being able to effectively organize all the data required for the app in a database. Although me and my partner made sure to plan out how our data should be connected before setting up the database, sometimes new data would come up that would require us to change the overall structure of the database again. Additionally, it was challenging to learn all the languages needed for the project (Angular & MongoDB) in the short timeframe."
            },
            {
                id: 3,
                title: "ResuManager",
                type: "Web App",
                employer: "ITWS Project",
                year: "2021",
                blurb: "Worked as a Frontend Developer, team of 5",
                desc: "ResuManager is a web application that allows users to quickly and easily build customizable resumes, using togglable blocks of text. It features re-organizable & toggleable resume sections so you can easily customize your resumes, a varity of resume templates, and QR code links for each resume so that you can easily share your resumes to potential employers.",
                myrole: "I concepted the original idea for the project and worked with other members to create the original wireframes before implementing them. I also worked to create the components in the Angular framework that would communicate with the database.",
                // github: "https://github.com/Web-Science-Group-3/ResuManager",
                mockups: [
                    {
                        mockup_image: RM_frontpage,
                        mockup_caption: "ResuManager frontpage laptop view",
                        mockup_type: "laptop"
                    },
                    {
                        mockup_image: RM_library,
                        mockup_caption: "ResuManager library laptop view",
                        mockup_type: "laptop"
                    }
                ],
                challenges: "In addition to learning Angular in a short amount of time, learning how to connect toggleable module interfaces with the backend components was difficult. This project required a lot of communication with the backend team in order to get parts working properly."
            }
        ]
    }
    render() { 
        return (
            <main className="rounded d-flex flex-column">
                <section className="p-2">
                    <h1>Projects</h1>
                    <div className="d-flex flex-column">
                        { this.state.projects.map(project =>
                            <Project project={project}/>
                        )}
                    </div>
                </section>
            </main>
            
        );
    }
}
 
export default Projects;
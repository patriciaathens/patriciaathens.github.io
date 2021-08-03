import React, { Component } from 'react';
import Project from './project';

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
                title: "UClean",
                type: "Phone App",
                employer: "United Airlines for ITWS Capstone",
                year: "2021",
                blurb: "Worked as a fullstack developer",
                desc: "UClean is built to be used by United Airline cleaning agents. Lists all tasks needed for each airplane cleaning job so that cleaning agents can easily guide cleaning crew members to efficiently prepare each airplane for its next flight.",
                myrole: "I worked on a team of 5 as a fullstack developer. After discussion within the team and the client, this application was built using MEAN stack and served with Amazon Cloud Services.",
                github: "https://github.com/galexford/UClean",
                report: "https://docs.google.com/document/d/16aZh2aqMf1lyhTNRLSo6po7HhPYbxOvADrQbkg5bu6o/edit?usp=sharing",
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
                ]  
            },
            {
                id: 2,
                title: "ResuManager",
                type: "Web App",
                employer: "ITWS Project",
                year: "2021",
                blurb: "Worked as a frontend developer",
                desc: "ResuManager is a web application that allows users to quickly and easily build customizable resumes, using togglable blocks of text. It features re-organizable & toggleable resume sections so you can easily customize your resumes, a varity of resume templates, and QR code links for each resume so that you can easily share your resumes to potential employers.",
                myrole: "I worked on a team of 5 as a frontend developer. I concepted the original idea for the project and worked with other members to create the original wireframes before implementing them. I also worked to create the components in the Angular framework that would communicate with the database.",
                github: "https://github.com/Web-Science-Group-3/ResuManager",
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
                ]              
            }
        ]
    }
    render() { 
        return (
            <main className="rounded d-flex flex-column">
                <section className="p-2">
                    <h1>Previous Work</h1>
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
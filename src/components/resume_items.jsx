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
        resume_items: [
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
            }
        ]
    }
    render() { 
        return (
            <main className="rounded d-flex flex-column">
                <section className="p-2">
                    <h1>Resume</h1>
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
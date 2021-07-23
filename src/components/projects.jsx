import React, { Component } from 'react';
import Project from './project';

class Projects extends Component {
    state = {
        projects: [
            {
                id: 1,
                title: "UClean",
                employer: "United Airlines - ITWS Capstone",
                year: "2021",
                blurb: "Worked as a fullstack developer",
                github: "https://github.com/galexford/UClean",
                report: "https://docs.google.com/document/d/16aZh2aqMf1lyhTNRLSo6po7HhPYbxOvADrQbkg5bu6o/edit?usp=sharing"
            },
            {
                id: 2,
                title: "ResuManager",
                employer: "ITWS Project",
                year: "2021",
                blurb: "Worked as a frontend developer",
                github: "https://github.com/Web-Science-Group-3/ResuManager"
            },
            {
                id: 3,
                title: "ResuManager",
                employer: "ITWS Project",
                year: "2021",
                blurb: "Worked as a frontend developer",
                github: "https://github.com/Web-Science-Group-3/ResuManager"
            }
        ]
    }
    render() { 
        return (
            <main className="rounded d-flex flex-column">
                <section className="p-2">
                    <h1>Previous Work</h1>
                    <div className="d-flex flex-row justify-content-start flex-wrap">
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
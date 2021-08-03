import React, { Component } from 'react';
import Mockup from './mockup';

class Project extends Component {
    
    render() {
        const { project } = this.props;
        return (
            <section className="project p-2">
                {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                <div className="project-info">
                    <h4 className="project-title">{project.title}<span className="project-type">{project.type}</span></h4>
                    <h5 className="project-subtitle">sponsored by {project.employer} in {project.year}</h5>
                    <p className="project-ptitle">About the Project</p>
                    <p className="project-desc">{project.desc}</p>
                    <p className="project-ptitle">My Role</p>
                    <p className="project-desc">{project.myrole}</p>
                    <a href={project.github} target="_blank" className="btn git-btn">Github</a>
                </div>
                {/* <img className="mockup-img rounded" src={project.mockup1} alt={project.mockup1_caption} />
                <img className="mockup-img rounded" src={project.mockup2} alt={project.mockup2_caption} /> */}
                <div className="mockup-container d-flex flex-row justify-content-center flex-wrap">
                    { project.mockups.map(mockup =>
                        <Mockup mockups={mockup}/>
                    )}
                </div>
            </section>
        );
    }
}
 
export default Project;
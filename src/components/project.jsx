import React, { Component } from 'react';

class Project extends Component {
    
    render() {
        const { project } = this.props;
        return (
            <section className="project p-2">
                {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                <div className="project-info">
                    <h4 className="project-title">{project.title}</h4>
                    <h5 className="project-subtitle">{project.employer}</h5>
                    <p className="project-blurb">{project.blurb}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </section>
        );
    }
}
 
export default Project;
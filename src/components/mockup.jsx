import React, { Component } from 'react';

class Mockup extends Component {
    
    render() {
        const { mockups } = this.props;
        return (
            <a href={mockups.mockup_image} target="_blank">
                <img className={"mockup-img " + (mockups.mockup_type || "")} src={mockups.mockup_image} alt={mockups.mockup_caption} />
            </a>
        );
    }
}
 
export default Mockup;
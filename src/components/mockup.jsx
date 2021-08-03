import React, { Component } from 'react';

class Mockup extends Component {
    
    render() {
        const { mockups } = this.props;
        return (
            <img className={ "mockup-img " + ( mockups.mockup_type || "") } src={mockups.mockup_image} alt={mockups.mockup_caption} />
        );
    }
}
 
export default Mockup;
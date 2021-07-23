import React, { Component } from 'react';
import {MarkGithubIcon} from '@primer/octicons-react'

const Contact = () => {
    return (
        <main className="rounded d-flex flex-column">
            <section className="p-2">
                <h1>Contact Me!</h1>
                <ul>
                    <li><MarkGithubIcon size={16} /></li>
                </ul>
            </section>
        </main>
    );
}
 
export default Contact;
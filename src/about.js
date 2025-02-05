import React from "react";
import Navigation from "./navigation";
import "./about.css";
function About() {
    return (
        <div>
            <Navigation/> 
             <div className="container">
            <h1>About Me</h1>
           
            <div className="container">
                <section className="main-content">
                    <h1>Welcome to My About Page</h1>
                    <p>Hello! My name is [Your Name]. I am a [Your Profession/Role] with a passion for [Your Passion/Hobby]. In this space, you'll find information about my background, my professional journey, and what inspires me every day.</p>
                    <h2>Background</h2>
                    <p>[Include details about your background here]</p>
                    <h2>Experience</h2>
                    <p>[Include details about your professional experience here]</p>
                    <h2>Interests</h2>
                    <p>[Include details about your interests and hobbies here]</p>
                </section>
            </div>
        </div>
        </div>
       
    );
}

export default About;
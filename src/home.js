import React from "react";
import "./home.css";
 import Navigation from "./navigation";
function Home() {
    return (<div>
        <Navigation/>
        <div className="container">
            <h1>Welcome</h1>
           
            <div className="container">
                <section className="main-content">
                    <h1>Welcome to My Home Page</h1>
                    <p>This is the Home page of my website. Here, you can find links to my projects, contact information, and learn more about me on the About page.</p>
                    <p>Feel free to explore and get to know more about my work and interests.</p>
                </section>
            </div>
        </div>
        </div>
       
    );
}

export default Home;                  
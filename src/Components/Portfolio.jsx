/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Eco-quest",
    description:
      "An innovative app that aims to make reducing waste and promoting sustainability more accessible, engaging, and achievable for everyone. The app tracks and records users’ daily actions related to reducing waste and rewards them with coupons and money.",
    url: "https://github.com/Ignotus-21/eco_quest",
  },
  {
    title: "Python Voice Assistant",
    description:
      "This Python-based virtual assistant can perform basic tasks. The assistant can interact with the user through voice commands and provide information on a range of topics using Wikipedia. It can also play music, open websites, send emails and shut down or restart the system using os and psutil. Additionally, the assistant can make jokes using pyjokes, take screenshots using pyautogui, and provide the current date and time using DateTime.",
    url: "https://github.com/Ignotus-21/VirtualAssistant",
  },
  {
    title: "Petology Website",
    description:
      "HTML-CSS website that allows pet lovers to see a VET on their screens and book an appointment anytime.",
    url: "https://github.com/Ignotus-21/Petology",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

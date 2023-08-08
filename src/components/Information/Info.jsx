import React from "react";
import image4 from "../../assets/image4.jpg";
import "./Info.css";

export default function Info() {
    return(
        <div className="Info">
      <img src={image4} alt="Ash Moreno" className="--info-image" />
      <h1>Duncan Munene</h1>
      <h2>UI/UX Developer</h2>
      <p>
        <a
          href="https://www.ashmoreno.dev"
          target="_blank"
          rel="noreferrer"
          className="--info-portfolio"
        >
          Duncan.designer
        </a>
      </p>
      <div className="--info-buttons">
        <button className="--info-email">
          <a href="mailto:muriukiduncan60@gmail">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="--info-linkedin">
          <a
            href="https://www.linkedin.com/in/duncan-munene-2aa35726b/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    </div>
    )
}
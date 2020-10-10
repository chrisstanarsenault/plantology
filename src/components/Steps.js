import React from "react";

import "../styles/Steps.scss";
import stepsImage from "../images/steps-image-background.jpeg";

export default function Steps() {
  return (
    <section className="steps-section">
      <article className="steps-article">
        <div className="steps-content-container">
          <h3>How to get stoned in 4 simple steps</h3>
          <ol>
            <li>
              Clean the filth of the day (or night) off your face and remove all
              makeup. Apply a generous amount of your favourite facial oil.
            </li>
            <li>
              Using slow strokes, work your way upwards and outwards. Breathe
              out all the bullsh*t and focus on one side of your face at a time.
            </li>
            <li>
              Use only the weight of the stone as you go - and not that of the
              impending global crisis - especially around the delicate eye area.
            </li>
            <li>
              Repeat each stroke 3-5 times until practically glowing and be sure
              to clean your tool with a mild cleanser (or just dip it in your
              mimosa) after each and every use.
            </li>
          </ol>
        </div>
      </article>
      <div className="steps-image-background">
        <div className="circle-div"></div>
        {/*<img src={stepsImage} alt="3 stones" />*/}
      </div>
    </section>
  );
}

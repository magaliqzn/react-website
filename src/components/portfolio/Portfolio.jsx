import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
const data = [
  {
    id: 1,
    image: IMG1,
    tittle: "BACAcrawl",
    github: "https://github.com/magaliqzn/bacacrawl",
    description:
      "I'm currently living near Venice, and people around here likes to practice the pub crawl (baccaró) quite often, but the best bars in Italy are usually without names and it's very hard to find the location on google map. So I create this web application where you can save the places that you visited and rank it, so the next time you are there you can know exactly where to go.",
  },
  {
    id: 2,
    image: IMG2,
    tittle: "Skelet-dice",
    github: "https://github.com/magaliqzn/skelet-dice",
    description:
      "The name of the game is PIG, and the theme is old cartoon, which I love 🤍 Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.  The first to reach 100, wins.",
  },
  {
    id: 3,
    image: IMG3,
    tittle: "payMI",
    github: "https://github.com/magaliqzn/payMI",
    description:
      "An easy web application tool for friends to track bills and other shared expenses, so everyone is reimbursed. You can log-in with your user and password, see your balance, transfer money, or ask for money.",
  },
  {
    id: 4,
    image: IMG4,
    tittle: "Matrix-pong",
    github: "https://github.com/magaliqzn/matrix-pong",
    description:
      "This was my first code, with Python, and it might look simple, but this was the spark to light my love for coding. A ping-pong game with matrix as a the theme.",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, tittle, github, description }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__items-image">
                <img src={image} alt={tittle} />
              </div>
              <h3>{tittle}</h3>
              <p>{description} </p>
              <div className="portfolio__items-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

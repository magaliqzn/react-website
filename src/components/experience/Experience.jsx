import React from "react";
import "./experience.css";
import { BiCheck } from "react-icons/bi";
import FlagArg from "../../assets/flag-arg.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    flag: FlagArg,
    position: "Cost and Budget Analyst",
    description:
      "Identification of resources, control and cost analysis for urban building projects. Develop and manage databases of construction prices on excel Collecting and analysis of data.",
    place:
      "Deparment of architecture and urban planning of the province of Formosa (2020-2022)",
  },
  {
    flag: FlagArg,
    position: "Census Data Analyst",
    description:
      " Collection, preparation and presentation of socioeconomic data of the Argentine population.",
    place: "National Statistics and Census institute of Argentina (2017-2019)",
  },
  {
    flag: FlagArg,
    position: "Data Analyst for Covid-19 Emergency",
    description:
      "Use of SQL to do Data Exploration and cleaning, with the queries I create visualization in Tableau and use python to find correlation between variables Technologies used: Excel, MySQL, Tableau, Python.",
    place: "National Statistics institute of Argentina (2020)",
  },
];
const Experience = () => {
  return (
    <section id="experience">
      <h5>Work</h5>
      <h2>Experience</h2>

      <Swiper
        className="container experience__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ flag, position, description, place }, index) => {
          return (
            <SwiperSlide key={index} className="experience">
              <div className="country__flag">
                <img src={flag} />
              </div>
              <h5 className="experience__position">{position}</h5>
              <small className="work__description">{description}</small>
              <h4 className="experience__place">{place}</h4>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Experience;

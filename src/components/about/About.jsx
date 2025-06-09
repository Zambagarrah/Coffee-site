import React from 'react';
import aboutImg from '../../assets/about-img/about-img2.webp';
import { FiCheck } from "react-icons/fi";
import './about.css';

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="about__grid container grid">
            <div className="about__img-wrapper">
                <img src={aboutImg} alt="" className="about__img" />
            </div>

            <div className="about__content">
                <h2 className="section__title title-left" data-title='About Us'>
                    Fresh Quality And Organic Tasty Coffee House For You.
                </h2>

                <p className="about__description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus molestiae atque similique necessitatibus obcaecati, ipsa eligendi cupiditate aspernatur veritatis voluptatibus adipisci in rerum nostrum alias. Aliquid officiis facilis magni natus!
                </p>

                <div className="about__details grid">
                    <p className="about__details-description">
                          <FiCheck />
                          At vero eos et accusamus et iusto odio.
                    </p>

                    <p className="about__details-description">
                          <FiCheck />
                          Established fact that a reader will be distracted.
                    </p>

                    <p className="about__details-description">
                          <FiCheck />
                          Sed ut perspiciatis unde omnis iste natus sit.
                    </p>
                </div>

                <div className="btn" id="team">
                    Our Experts
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;

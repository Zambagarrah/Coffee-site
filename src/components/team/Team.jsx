import React from 'react'
import chef1 from '../../assets/team/team-1.webp';
import chef2 from '../../assets/team/team-2.webp';
import chef3 from '../../assets/team/team-3.webp';
import chef4 from '../../assets/team/team-4.webp';

import { 
    FaFacebookF, 
    FaTwitter, 
    FaLinkedin, 
    FaYoutube,
    FaLinkedinIn, 
} from 'react-icons/fa';
import './team.css';

const Team = () => {
  return (
    <section className="team section" id="team">
        <h2 className="section__title" data-title='Chefs'>
            Meet Our Experts
        </h2>

        <div className="team__grid grid container">
            <div className="team__item">
                <img src={chef1} alt="" className="team__img" />

                <div className="team__data">
                    <h3 className="team__title">Chad Smith</h3>
                    <p className="team__job">Senior Chef</p>
                </div>

                <div className="team__socials">
                    <a href='/' className="team__social-link">
                        <FaFacebookF />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaTwitter />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaLinkedinIn />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaYoutube />
                    </a>
                </div>
            </div>

            <div className="team__item">
                <img src={chef2} alt="" className="team__img" />

                <div className="team__data">
                    <h3 className="team__title">Tony Pinto</h3>
                    <p className="team__job">Senior Chef</p>
                </div>

                <div className="team__socials">
                    <a href='/' className="team__social-link">
                        <FaFacebookF />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaTwitter />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaLinkedinIn />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaYoutube />
                    </a>
                </div>
            </div>

            <div className="team__item">
                <img src={chef3} alt="" className="team__img" />

                <div className="team__data">
                    <h3 className="team__title">Malissa Fie</h3>
                    <p className="team__job">Senior Chef</p>
                </div>

                <div className="team__socials">
                    <a href='/' className="team__social-link">
                        <FaFacebookF />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaTwitter />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaLinkedinIn />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaYoutube />
                    </a>
                </div>
            </div>

            <div className="team__item">
                <img src={chef4} alt="" className="team__img" />

                <div className="team__data">
                    <h3 className="team__title">Aaron Rodney</h3>
                    <p className="team__job">Senior Chef</p>
                </div>

                <div className="team__socials">
                    <a href='/' className="team__social-link">
                        <FaFacebookF />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaTwitter />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaLinkedinIn />
                    </a>

                    <a href='/' className="team__social-link">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team
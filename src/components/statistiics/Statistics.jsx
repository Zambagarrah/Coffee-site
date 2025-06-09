import React from 'react'
import coffeeShop from '../../assets/stats/coffee-shop.svg'
import experience from '../../assets/stats/experience.svg'
import coffeeTumbler from '../../assets/stats/coffee-tumbler.svg'
import chef from '../../assets/stats/chef.svg'
import "./statistics.css"

const Statistics = () => {
  return (
    <section className="stats section">
        <div className="stats__grid container grid">
            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={coffeeShop} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">1500</p>
                    <h3 className="stats__title">+ Total Branches</h3>
                </div>
            </div>

            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={coffeeTumbler} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">250</p>
                    <h3 className="stats__title">+ Happy Customers</h3>
                </div>
            </div>

            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={chef} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">120</p>
                    <h3 className="stats__title">+ Professional Chefs</h3>
                </div>
            </div>

            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={experience} alt="" className="stats__img" />
                </div>

                <div>
                    <p className="stats__no">50</p>
                    <h3 className="stats__title">+ Years of Experience</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Statistics
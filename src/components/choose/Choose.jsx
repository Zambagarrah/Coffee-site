import React from 'react'
import chooseImg from '../../assets/choose/choose2.webp'
import coffeeMug from '../../assets/choose/coffee-cup.svg'
import coffeeBeans from '../../assets/choose/coffee-beans.svg'
import coffeeTumbler from '../../assets/choose/coffee-tumbler.svg'
import './choose.css'

const Choose = () => {
  return (
    <section className="choose section">
        <div className="choose__grid container grid">
            <div className="choose__content">
                <h2 className="section__title title-left" data-title="Why Choose Us">
                    Coffero Most Out Of Your Favorite & Tasty Coffee House 
                </h2>

                <p className="choose__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quasi sed dolore voluptates obcaecati excepturi aperiam provident voluptate illo a ducimus molestiae cum distinctio, 
                    et tempore, omnis sit minus eligendi harum.
                </p>

                <div className="choose__details grid">
                    <div className="choose__details-item">
                        <div className="choose__details-img-wrapper">
                            <img src={coffeeMug} alt="" className="choose__deatils-img" />
                        </div>

                        <div>
                            <h3 className="choose__details-title">Awesome Aroma</h3>
                            <p className="choose__details-description">
                                Quasi sed dolore voluptates obcaecati excepturi aperiam provident voluptate illo a ducimus molestiae cum distinctio, 
                                et tempore, omnis sit minus eligendi harum.
                            </p>
                        </div>
                    </div>

                    <div className="choose__details-item">
                        <div className="choose__details-img-wrapper">
                            <img src={coffeeBeans} alt="" className="choose__deatils-img" />
                        </div>

                        <div>
                            <h3 className="choose__details-title">Pure Grades</h3>
                            <p className="choose__details-description">
                                Quasi sed dolore voluptates obcaecati excepturi aperiam provident voluptate illo a ducimus molestiae cum distinctio, 
                                et tempore, omnis sit minus eligendi harum.
                            </p>
                        </div>
                    </div>

                    <div className="choose__details-item"> 
                        <div className="choose__details-img-wrapper">
                            <img src={coffeeTumbler} alt="" className="choose__deatils-img" />
                        </div>

                        <div>
                            <h3 className="choose__details-title">Healthy Coffee</h3>
                            <p className="choose__details-description">
                                Quasi sed dolore voluptates obcaecati excepturi aperiam provident voluptate illo a ducimus molestiae cum distinctio, 
                                et tempore, omnis sit minus eligendi harum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={chooseImg} alt="" className="choose__img" />
        </div>
    </section>
  )
}

export default Choose
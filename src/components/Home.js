import React from 'react';
import Nav from "./Nav";

const Home = () => (
    <div>
        <section className="">
            <div className="hero-onyx_container">
                <div className="hero-onyx">
                    <div className="hero-onyx_image">
                        <div className="hero-onyx_image__overlay"></div>
                        <div className="hero-onyx_child hero-onyx_child__primary animation__floating"></div>
                        <div className="hero-onyx_child hero-onyx_child__secondary animation__floating"></div>
                        <div className="hero-onyx_description animation__title-in">
                            <h1 className="hero-onyx_header-text "><span className="hero-onyx_title">Sapphire</span>Corporate IT Design System</h1>
                            <p className="text-body text-body__light">Efficient User Interfaces created under consistent guidelines and principles</p>
                            <a href="#content-block" className="hero-onyx_scroll"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="content-block" className="content-block">
            <article className="theme_white stack">

                <section className="row-large">
                    <div className="col col-dsm-12">
                        <h2 className="text-heading-1 text-heading-1__normal margin_header-l">What is ONYX Design Systems</h2>
                    </div>
                    <article className="col col-dsm-8">
                        <p className="text-body text-body__light margin_body-m">Our Design System is a live tool product that defines how UI (User Interface) elements look and define basic
                            interaction regardless of the development language of platform.</p>
                        <p className="text-body text-body__light margin_body-m">Onyx provides the necessary resources to create UI efficiently under consistent guidelines and principles.</p>
                    </article>
                    <article className="center col col-dsm-4 col-msm-12">
                        <img className="single-img" src="assets/image/what-is-onyx.svg" />
                    </article>
                </section>
            </article>

            <article className="theme_white ">

                <section className="row-large row-large-test">
                    <div className="col col-dsm-12">
                        <h2 className="text-heading-1 text-heading-1__normal margin_header-l">The Benefits of a Design System</h2>
                    </div>
                    <article className="card col-dsm-4 col margin-stack_l">
                        <h3 className="card_header">Uniformity</h3>
                        <div className="card_img-wrapper margin-stack_l">
                            <img className="card-image-container_md" src="assets/image/uniformity.svg" />
                        </div>
                        <p className="card_details">Building a design system and developing a cohesive UI design/development process across a company will help
                            to ensure that the design will stay consistent across the entire experience.</p>
                    </article>

                    <article className="card col-dsm-4 col  margin-stack_l">
                        <h3 className="card_header">Order</h3>
                        <div className="card_img-wrapper margin-stack_l">
                            <img className="card-image-container_md" src="assets/image/order.svg" />
                        </div>
                        <p className="card_details">Having this one spot- product as the only source of truth helps designers and developers teams to spend less
                            time in how a site needs to look like to focus more on its functionality.</p>
                    </article>
                    <article className="card col-dsm-4 col margin-stack_l">
                        <h3 className="card_header">Reliability</h3>
                        <div className="card_img-wrapper margin-stack_l">
                            <img className="card-image-container_md" src="assets/image/reliability.svg" />
                        </div>
                        <p className="card_details">As the team grows many of the maintenance issues that currently exist will only begin to compound in the
                            future. Putting a plan and process now can minimize this risk. </p>
                    </article>
                </section>
            </article>
        </section>
        
    </div>
)

export default Home;
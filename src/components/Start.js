import React from 'react';
import Nav from "./Nav";

const Start = () => (
    <div id="get-started">
        <section className="">
            <article className=" banner banner_position">
                <div className="banner_header banner__gen-bg">

                    <div className="banner_box">
                        <button className="button banner_share sharethis-inline-share-buttons" onclick="sharethis()">
                            <span className="button_text">Share this Page</span>
                        </button>
                        <div className="popover_wrap">
                            <div id="popover" className="popover popover_box flag__top-right banner_sharethis-modal theme_white">
                                <div className="popover_dialog">
                                    <button className="popover_close" data-dismiss="modal" aria-hidden="true"></button>
                                    <button className="copyUrl" data-clipboard-action="copy" data-clipboard-target=".share-url" onclick="copyUrl()"></button>
                                    <div className="popover_content">
                                        <div className="share-url popover_body">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="banner_title">
                            <a className="banner_link">How to Get Started</a>
                        </h1>
                        <p className="banner_description text-body__normal">The road to keep our team unified under one consistent user experience</p>
                    </div>
                </div>
            </article>
        </section>

        <section className="content-block">
        <article className="theme_white ">
            <section className="row-large margin-stack_l">
                <article className="col col-dsm-6">
                    <p className="text-body text-body__light margin_body ">We created Onyx to provide straightforward resources, code examples and visual inspiration to start designing
                        and building systematically following unique principles, so you have more time to enjoy the creative
                        process and concentrate  in what really matters: find the right solution to your customer needs and
                        share them with the rest of the team.</p>
                </article>
                <article className="col col-mxs-12 col-dsm-6 center">
                    <img className="single-img" src="assets/image/get-started.svg" />
                </article>
            </section>
        </article>
        <article className="theme_white">
            <section className="row-large">
                <article className="card col col-dsm-4 margin-stack_l">
                    <h2 className="card_header">If You Are a Product Owner</h2>
                    <p className="text-body text-body__light margin-stack_l">A Product Owner is the representative of the business, aggregates and summarizes customer input and makes sure the product goes in the right direction. Download the Website Planning Stencil to start designing your product.</p>
                    <button className="button button_text-link">
                        <span className="button__left lnr lnr-download2"></span>
                        {/* <span className="button_text">Download Website Planning Stencils (Desktop View)</span> */}
                        <a href="assets/download/product-owner/Website-Planning-Stencils - Desktop View.pptx">Website Planning Stencil (Desktop)</a>
                    </button>
                </article>
                <article className="card col col-dsm-4 margin-stack_l">
                    <h2 className="card_header">If You Are a Designer</h2>
                    <p className="text-body text-body__light margin-stack_l">Explore our Design guidelines to understand our Visual Design Guidelines, Design Principles and our always
                        growing Accessibility suggestions. Also check our design kit that you need to start your design process.</p>
                    <button className="button button_text-link button_disabled" style={{"display": "none"}}>
                        <span className="button__left lnr lnr-download2"></span>
                        <span className="button_text">UI Template (PSD - 3.1 MB)</span>
                    </button>
                </article>
                <article className="card col col-dsm-4 margin-stack_l">
                    <h2 className="card_header">If You Are a Developer</h2>
                    <p className="text-body text-body__light margin-stack_l">Having this one spot- product as the only source of truth helps designers and developers teams to spend
                        less time in how a site needs to look like to focus more on its functionality.</p>
                    <button className="button button_text-link">
                        <span className="button__left lnr lnr-download2"></span>
                        <span className="button_text">Web Kit (7.6 MB)</span>
                    </button>
                </article>
                <article className="card col col-dsm-4 margin-stack_l" style={{"display": "none"}}>
                    <h2 className="card_header">If You Are a Project Manager</h2>
                    <p className="text-body text-body__light margin-stack_l">Our process evolves in a continuun pattern and in order for you to easily keep track of each project
                        steps we divided our process into five phases, each with specific deliverables</p>
                    <button className="button button_text-link button_disabled " style={{"display": "none"}}>
                        <span className="button__left lnr lnr-download2"></span>
                        <span className="button_text">See all our deliverables.</span>
                    </button>
                </article>
            </section>
        </article>
    </section>
    <div className="theme_whitesmoke">
        <section className="content-block">
            <article className="row-large">
                <div className="col col-msm-12 col-dsm-12">
                    <h2 className="text-heading-2 text-heading-2__normal margin_header-l">Questions or Suggestions</h2>
                </div>
                <article className="col col-dsm-6 margin-stack_l">
                    <p className="text-body text-body__light">Onyx improves with your feedback so do not hesitate in telling us what are you design or development
                        resources needs</p>
                </article>

                <div className="col col-dsm-6" id="dvForm">
                    <article id="formsubmit">
                        <form>
                            <div className="input-text_box">
                                <label id="nameLabel" className="label_text label_box">Name
                                    <span className="label_required">*</span>
                                </label>
                                <input id="name" className="input-text_border input-text_theme input-text_text" type="name" placeholder="First Last" />
                                <span className="input-text_help name_error_text"></span>
                            </div>
                            <div className="input-text_box">
                                <label id="emailLabel" className="label_text label_box">Email
                                    <span className="label_required">*</span>
                                </label>
                                <input id="email" className="input-text_border input-text_theme input-text_text" type="email" placeholder="first.last@newellco.com"
                                />
                                <span className="input-text_help email_error_text"></span>
                            </div>
                            <div className="input-text_box">
                                <label id="descrLabel" className="label_text label_box">Tell us what you think
                                    <span className="label_required">*</span>
                                </label>
                                <input id="description" className="input-text_border input-text_theme input-text_text" type="message" placeholder="message..."
                                />
                                <span className="input-text_help description_error_text"></span>
                            </div>
                            <button className="button button_box button_theme button__center" onclick="return sendEmail();">
                                <span className="button_text">Send your message</span>
                            </button>
                        </form>
                    </article>

                </div>
            </article>
        </section>
    </div>


    </div>
)

export default Start;
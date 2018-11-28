import React from 'react';
import Nav from "./Nav";
import Resources from "./Resources";

const Sidebar = () => (
    <div className="sidebar sidebar--left theme_blue">
        <header className="header-onyx header-onyx_box">
            <a className="mobile-nav-menu-toggle"></a>
            <a className="logo logo_box logo_newell-brands-white" alt="Newell Brands Logo" href="#"></a>
            <h1 className="text-nav-header text-nav-header__light">Corporate IT Design System</h1>
        </header>
        <nav id="subnav" className="navigation navigation_box theme_blue subnav" >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/start">Start</Link></li>
            <li><Link to="/404">404</Link></li>
        </ul>
        <header className="header-onyx header-onyx_box mobile">
            <a className="mobile-nav-menu-toggle open"></a>
            <a className="logo logo_box logo_newell-brands-white" alt="Newell Brands Logo" href="#/"></a>
            <h1 className="text-nav-header text-nav-header__light">Corporate IT Design System</h1>
        </header>
        <ul className="navigation_tier-one">
            <li className="navigation_menu-item startMenu">
                <a data-menu="startMenu" className="navigation_menu-link has-subnav" href="">How to Get Started</a>
            </li>
            <li className="navigation_menu-item contentMenu nav-section-open">
                <a data-menu="contentMenu" className="navigation_menu-link has-subnav" href="">
                    <span className="navigation_text">Design Guidelines</span>
                </a>
                <ul className="navigation_two-tier theme_lt-blue" style={{"display": "block"}}>
                    <li className="navigation_menu-item contentMenu">
                        <a data-menu="contentMenu" className="navigation_menu-link" href="">
                            <span className="navigation_text">Overview</span>
                        </a>
                    </li>
                    <li className="navigation_menu-item contentMenu">
                        <a data-menu="contentMenu" className="navigation_menu-link" href="">
                            <span className="navigation_text">Design Principles</span>
                        </a>
                    </li>
                    <li className="navigation_menu-item contentMenu nav-section-open">
                        <a data-menu="contentMenu" className="navigation_menu-link has-subnav" href="">
                            <span className="navigation_text">Visual Guidelines</span>
                        </a>
                        <ul className="navigation_three-tier theme_white" style={{"display": "block"}} >
                            <li className="navigation_menu-item contentMenu">
                                <a data-menu="contentMenu" className="navigation_menu-link" href="">
                                    <span className="navigation_text">Color</span>
                                </a>
                            </li>
                            <li className="navigation_menu-item contentMenu">
                                <a data-menu="contentMenu" className="navigation_menu-link" href="#/guidelines/alignment">
                                    <span className="navigation_text">Alignment</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    
    </nav>
        <Resources />
    </div>
)

export default Sidebar;
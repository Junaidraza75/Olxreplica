import React from 'react';

import logo from "../images UI/olxlogo.png";

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon1 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon2 } from '@fortawesome/react-fontawesome'
function Header() {

    const nav = [
        { ID: 1, label: "Mobile Phone"},
        { ID: 2, label: "Cars"},
        { ID: 3, label: "Motorcycles"},
        { ID: 4, label: "Houses"},
        { ID: 5, label: "TV-Video-Audio"},
        { ID: 6, label: "Tablets"},
        { ID: 7, label: "Land & Plots"}
    ];

    return (
        <React.Fragment>
            <div className="header fixed flex aic">
                <div className="logo">
                <Link to="/" className="noul noulh font s14 color"><img src={require("../images UI/olxlogo.png")} /></Link>
                    
                </div>
                <div className="location rel flex aic fas fa-search">
                    <div className="icon-search ico s20"></div>
                    <input className="label s15 font" placeholder="Your location" />
                    <button className="icon-chervon-down arro s23 fas fa-chevron-down"> </button>

                </div>
                <div className="search flex aic">
                    <input type="text" placeholder="Find Cars Mobile Phones and more..." className="query font s15" />
                    <button className="icon-search go s24 cfff" />

                </div>
                <div className="actions flex aic">
                    <Link to="/account/signin" className="color fontb s16 signh sign">Login</Link>
                    <button className="color sell flex aic">
                        <div className="icon-plus s15 ico" />
                        <h2 className="s18 fontb">Sell</h2>
                    </button>

                </div>

            </div>
            <div className="hnav fixed flex aic">
                <button className="view-cates flex aic color">
                    <h2 className="s18 font color">All Categories</h2>
                    <button className="icon-chervon-down arro s23" />
                </button>
                {
                    nav.map(item => {
                        return (
                            <Link to={"/browser/" + item.ID} className="noul noulh color bl font s15">{item.label}</Link>
                        )
                    })
                }
            </div>
            <div className="hclr"/> 
        </React.Fragment>

    );
}

export default Header;
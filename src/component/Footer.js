import React, { useEffect, useState } from "react";
import AdItem from './AdItem';
import { Link } from 'react-router-dom'


function Footer() {
    return (

        <React.Fragment>
        <div className="footer flex ">
            <div className="block flex flex-col">
                <h2 className="htitle s16 fontb color">Popular categories</h2>
                <Link to="/" className="noul noulh font s14 color">Cars</Link>
                <Link to="/" className="noul noulh font s14 color">Flats for rent</Link>
                <Link to="/" className="noul noulh font s14 color">Jobs</Link>
                <Link to="/" className="noul noulh font s14 color">Mobile Phones</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="htitle s16 fontb color">TRENDING SEARCHES</h2>
                <Link to="/" className="noul noulh font s14 color">Bikes</Link>
                <Link to="/" className="noul noulh font s14 color">Watches</Link>
                <Link to="/" className="noul noulh font s14 color">Books</Link>
                <Link to="/" className="noul noulh font s14 color">Dogs</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="htitle s16 fontb color">ABOUT US</h2>
                <Link to="/" className="noul noulh font s14 color">About OLX Group</Link>
                <Link to="/" className="noul noulh font s14 color">OLX Blog</Link>
                <Link to="/" className="noul noulh font s14 color">Contact Us</Link>
                <Link to="/" className="noul noulh font s14 color">OLX for Businesses</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="htitle s16 fontb color">OLX</h2>
                <Link to="/" className="noul noulh font s14 color">Help</Link>
                <Link to="/" className="noul noulh font s14 color">Sitemap</Link>
                <Link to="/" className="noul noulh font s14 color">Legal & Privacy information</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="htitle s16 fontb color">OLX</h2>
            </div>
        </div>
        <div className="footer2 flex ">
            <h2 className="cff font s15">Other Countries India - South Africa - Indonesia</h2>
            <h2 className="right cff font s15">Saylani Free Classifieds in Pakistan. © 2000-2020 OLX</h2>

        </div>
        </React.Fragment>
    )
}

export default Footer;
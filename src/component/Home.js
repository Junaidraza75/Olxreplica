

import React, { useEffect, useState } from "react";
import AdItem from './AdItem';



function HomePage() {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (loading) {
            let _list = [];

            for (let i = 0; i < 20; i++) {
                _list.push(<AdItem placeholder={true} />);
            }
            setList(_list);
        }
    }, list);


    return (
        <React.Fragment>
            <div className="home flex">
                <div className="ad-list flex">
                    {list}
                </div>
                <button className="load-more fontb s17 anim c333 b">
                    Load More
            </button>
            </div>
            <div className="app-ribbon flex aic">
                <div className="img"><img className="bl" src="https://statics.olx.com.pk/external/base/img/phone-app.png" /> </div>
                <div className="meta">
                    <h2 className="title fontb color s24">  TRY THE OLX APP </h2>
                    <h2 className="title fontb color s16"> Buy, sell and find just about anything using the app on your mobile.</h2>
                </div>
                <div className="link">
                    <h2 className="title fontb color s20">Get Your App Today</h2>
                    <div className="flex as" >
                        <a href="#" className="noul bl"><img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" /> </a>
                        <a href="#"  className="noul bl"><img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" /> </a>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default HomePage;
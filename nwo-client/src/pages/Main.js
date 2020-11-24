import React from 'react';
import '../styles/main.css';


const Main = () => {


    return (
        <div className="main__root">
            <div className="main">
                <div className="hero-logo--container">
                    {/* <img src="https://nwobucky.s3.us-east-2.amazonaws.com/NWO_Body+Full+Logo_Full+Color.png" alt="lg-Logo-png"/> */}
                </div>
                <div className="bulk-body--container">
                    <div className="schedule-box--container">
                        <div className="schedule-box">
                            <img src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_2365.jpg" alt="md-Basket-jpg" />
                        </div>
                    </div>
                    <div className="bottom-box"></div>
                </div>
                <div className="footer">
                    <a href="https://icons8.com/icon/13912/facebook">Facebook icon by Icons8</a>
                    <a href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram">Instagram icon by Icons8</a>
                    <a href="https://icons8.com/icon/60469/twitter-squared">Twitter Squared icon by Icons8</a>
                </div>
            </div>

        </div>
    )

};
export default Main;

import React from 'react';


const Header = () => {


    return (
        <div className="header-container">
            <nav>
                <div>
                    <img src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Head+Logo_Full+Color_White.png" alt="md-Logo-head-white" />
                    <img src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Ver+Text+Logo_White.png" alt="md-Logo-text-white" />
                </div>
                <ul>
                    <li><img src="https://img.icons8.com/color/48/000000/facebook.png" /></li>
                    <li><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" /></li>
                    <li><img src="https://img.icons8.com/color/48/000000/twitter-squared.png" /></li>
                </ul>
            </nav>

            {/* <div className="header">
                <div className="header__social--container">
                    <img src="https://img.icons8.com/color/48/000000/facebook.png" />
                    <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
                    <img src="https://img.icons8.com/color/48/000000/twitter-squared.png" />
                </div>
                <div className="header__main--container">
                    <img src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Head+Logo_Full+Color_White.png" alt="md-Logo-head-white" />
                    <img src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Ver+Text+Logo_White.png" alt="md-Logo-text-white" />
                </div>
                <div className="header__right--container">

                </div>
            </div> */}
        </div>
    )

};
export default Header;

import React from "react";
import Pic1 from "./images/p1.jpg";
import Pic2 from "./images/p2.jpg";
import "./index.css"
import { Button } from '@mui/material';

const Section=()=>{
    return (
        <div className="data_container ">
            <div className="pic1">
                <img src={Pic1} alt="pic1"/>
                <div className="p1">
                    <h2>Save instantly with Expedia Rewards</h2>
                    <h4>You can enjoy access to perks like Member Prices, saving you 10% or more on select hotels. Terms may apply.</h4>  
                    <Button variant="contained">Show More</Button>
                </div>
            </div>

            <div className="pic2">
                <div className="p1">
                    <h5>Plan ahead and save</h5>
                    <h4>Book 60 days in advance for 20% off select days
                    You can enjoy access to perks like Member Prices, saving you 10% or more on select hotels. Terms may apply.
                    </h4>
                </div>
                <img src={Pic2} alt="pic2" className="pic_left"/> 
            </div>


            <div className="footer_container">
                <h2>Book My Hotel</h2>
                <div className="footer">
                    <div className="container_list">
                        <ul>
                            <li className="footer_heading">Company</li>
                            <li>About us</li>
                            <li>Jobs</li>
                            <li>List your proerty</li>
                        </ul>
                        
                    </div>    
                    <div className="container_list">
                        <ul>
                            <li className="footer_heading">Explore</li>
                            <li>India travel guide</li>
                            <li>Hotels in India</li>
                            <li>Car hire</li>
                        </ul>
                        
                    </div>    
                    <div className="container_list">
                        <ul>
                            <li className="footer_heading">Terms and policies</li>
                            <li>Privacy Statement</li>
                            <li>Terms of use</li>
                            <li>Vrbo terms and conditions</li>
                        </ul>
                        
                    </div>    
                    <div className="container_list">
                        <ul>
                            <li className="footer_heading">Help</li>
                            <li>Support</li>
                            <li>Change or cancel your booking</li>
                            <li>Booking a flight using a airline credit</li>
                        </ul>
                        
                    </div>    
                </div>
                   
            </div>
                <div className="footer__section">
                    <h1>BOOK MY HOTEL</h1>
                    <label> &copy; 2022 BMH, Inc., an BMH Group company / BMH Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd.
                        All rights reserved. BMH and the Airplane Logo are trademarks or registered trademarks of BMH, Inc.
                    </label>
                </div>

        </div>
    )
}

export default Section;
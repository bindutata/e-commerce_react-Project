import React from "react";
import {footMenu} from './footerdata';
import {Link} from 'react-router-dom';
import '../Footer/styles.css';


const Footer=()=>{
    return(
        <div className="container-fluid  footer">
            <div className="contact-info">
                <div className="contact">
                    <h3>Tech-Shop</h3>
                    <p>Subscribe to our Email alerts to receive only discount offers,and new products info.</p>
                    <input type='email' placeholder="Email address"/>
                    <input type='submit' value='subscribe'/>
                </div>
                {footMenu.map((service)=>(
                    <div className="service" key={service.id}>
                        <h6>{service.title}</h6>
                        {service.menu.map((menu)=>(
                            <Link to='#' key={menu.id}>{menu.link}</Link> ))}
                    </div>
                ))}
            </div>
            <hr/>
            <div className="copy-rights">
                <p>{new Date().getFullYear()} All Rights Reserved.Built by Bindu</p>
                <div className="social-icons">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
        </div>

    )
};
export default Footer;


// rafce 
import React from 'react';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import image from "./img/dd.png";

const Banner = () => {
    return (
    
        <header className="header">
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <ul className="header_ul">
                            <li><FaFacebookF /></li>
                            <li><FaTwitter/></li>
                            <li><FaLinkedinIn/></li>
                            <li><FaGithub/></li>

                        </ul>
                        <h1>ABOUT ME</h1>
                        <p>Hi there, my name is Duc Dinh, a Full-Stack Developer. I was born in Vietnam and I grew up in Hochiminh city. I am fun-loving 
                    and adventure-seeking stock broker with a growing passion for software development. I graduated from 
                    Marine University in Vietnam in 2007, and University of Maryland, Baltimore County in 2016 in US. I have 
                    worked for Scanwell Logistic for 1 year,  for Mitsui O.S.K lines for 3 years as a ship operator, 
                    for SSI as a stock broker after graduation from UMBC with a B.S degree in Information System. 
                    Now I am a full-stack developer and seek to translate my boundless energy into dynamic functional contents. With a passion in software development, 
                    I am positioned well to contribute to growth of the industry. So I hope you enjoy exploring this 
                    new-born cyber crib. 
                        </p>
                        <div className="header_button">
                            <a href="https://drive.google.com/file/d/1uuLs_4n3YpGOZeT0CiYd01L-V5j3xybX/view?usp=sharing" className="btn btn-outline">My Resume</a>
                           
                            

                        </div>
                    
                    </div>

                    <div className="col-lg-6 col-xm-12">
                        <img className = "pic" src={image} alt="photo"></img>

                    </div>

                </div>
            </div>
            
        </header>
    )
}

export default Banner;

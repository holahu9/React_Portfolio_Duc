import React from 'react';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinShareButton, LinkedinIcon } from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Duc Dinh</p>
                        </div>
                        <div className="d-flex">
                            <p>Tel: (202)-802-4818</p>
                        </div>
                        <div className="d-flex">
                            <p>Email: jackmol3@gmail.com</p>
                        </div>
                        <div className="d-flex">
                            <p>Bethesda,MD</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <LinkedinShareButton 
                        url={"https://www.linkedin.com/in/duc-dinh-5013a9bb/"}
                        quote={"FullStack Developer"}
                        hashtag="#javascript"
                        >
                            <LinkedinIcon className="mx-3" size={36}/>
                        </LinkedinShareButton>
                        <EmailShareButton 
                        url={""}
                        >         
                            <EmailIcon className="mx-3" size={36}/>
                        </EmailShareButton>
                        
                        <FacebookShareButton 
                        url={"https://www.facebook.com/thienduc.dinh"}
                        >         
                            <FacebookIcon className="mx-3" size={36}/>
                        </FacebookShareButton>

                    </div>
                    <p className="p-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Duc Dinh | All Rights Reserved
                    </p>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;

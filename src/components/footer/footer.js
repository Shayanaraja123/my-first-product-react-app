import React from "react";
import "./footer.css";
import fb from "../../assests/fb.png";
import fin from "../../assests/fin.png";
import twitter from "../../assests/twitter.png";
import youtube from "../../assests/youtube.png";
import insta from "../../assests/insta.png";

function Footer() {
  return (
    <div className="footer-sec">
      <div className="container">
        <div className="landie-t">
          <div className="company">©2020 Yourcompany</div>
          <div className="landie-f">Landie</div>
          <button className="purchase-btn"> Purchase now</button>
        </div>
        <div className="home-logo">
          <div className="hoac">
            <div className="hom">home</div>
            <div className="hom">About</div>
            <div className="hom">Contact</div>
          </div>
          <div className="logoos">
            <div className='f-i'>
              <img src={fb} />
            </div>
            <div className='f-i'>
              <img src={fin} />
            </div>
            <div className='f-i'>
              <img src={twitter} />
            </div>
            <div className='f-i'>
              <img src={youtube} />
            </div>
            <div className='f-i'>
              <img src={insta} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

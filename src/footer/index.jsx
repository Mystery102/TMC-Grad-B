import React from "react";
import "./footer.css"

import facebook_img from "../assets/2.png"
import twitter_img from "../assets/1.png"
import instagram_img from "../assets/3.png"    
import anythin1_img from "../assets/anythin1.png"
import anythin2_img from "../assets/anythin2.png"
import anythin3_img from "../assets/anythin3.png"
function Footer (){


    return(

 <div className="footer">
    <div className="social-media">
<p>follow us :</p>
<div class="social-media">
  <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
    <img src={facebook_img} alt="YouTube" className="img"/>
  </a>
  <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
    <img src={twitter_img} alt="Twitter" className="img"/>
  </a>
  <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
    <img src={instagram_img} alt="Instagram" className="img"/>
  </a>

 
</div>
</div>
<nav>
Pages
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#delivery">Delivery</a></li>
  </ul>
</nav>
<div class="pictures">
  <a href="" target="_blank" rel="noopener noreferrer">
    <img src={anythin1_img} alt="anythin1" className="img"/>
  </a>
  <a href="" target="_blank" rel="noopener noreferrer">
    <img src={anythin2_img} alt="anythin2" className="img"/>
  </a>
  <a href="" target="_blank" rel="noopener noreferrer">
    <img src={anythin3_img} alt="anythin3" className="img"/>
  </a>

 
</div>


<div>


</div>

        </div>
    )
}

export default Footer
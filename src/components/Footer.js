import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
             
        
        
          <div class='footer-link-items'>
            <h2>Contact Us </h2>
            <a href ='https://www.instagram.com/homelessprojectmaastricht/'>Instagram <i class="fa fa-instagram" aria-hidden="true"></i>
</a>
           

            <a href='https://www.facebook.com/homelessprojectmaastricht'> Facebook <i class="fab fa-facebook"></i>    </a>
      
        <a>homelessprojectmaastricht@gmail.com <i class="far fa-envelope"></i></a>
           
            <small class='website-rights'>HPM © 2020</small>
        </div>
        
        </div>
      </div>
 
    </div>
  );
}

export default Footer;

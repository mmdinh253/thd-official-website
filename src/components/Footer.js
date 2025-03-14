import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Rules and Regulations</Link>
          </div> */}
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='mailto:mmdinh253@gmail.com'>Email Us</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='https://photos.google.com/share/AF1QipPdKdJSlYE9YIrJPTveMi1uGgixDdYWQlOWwtuoAhBl_yEoG6HcOZpQXhLXmiB1LA?key=a09rZ203d0JnNFRFZFNrN2JuUG1Tb0RDLWZNLS13'>
              Watch Past Videos
            </Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/groups/220113524726276'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook'></i>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/tntt.thd/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
      <small class='website-rights'>Đoàn Têrêsa Hài Đồng Giêsu © 2025. All rights reserved.</small>
    </div>
  );
}

export default Footer;
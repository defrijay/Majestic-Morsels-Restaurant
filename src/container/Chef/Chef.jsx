import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Cooking is not just a profession;</p>
        </div>
        <p className="p__opensans">  it's an art form that requires passion, dedication, and a relentless pursuit of perfection. At Majestic Restaurant, we believe in using the finest ingredients, embracing creativity, and honoring traditions to craft dishes that tell a story. Every plate is a testament to our love for food and our desire to provide an extraordinary dining experience.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kane Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
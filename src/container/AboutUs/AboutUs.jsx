import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Nestled in the heart of Gerum, Majestic City is a haven for food enthusiasts. Our philosophy is simple: offer an unforgettable dining experience through exceptional cuisine, impeccable service, and a warm, inviting ambiance. We are dedicated to delighting your senses and making every visit a memorable occasion.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded in 1990, Majestic Restaurant started as a dream to bring innovative and high-quality dining to Gerum City. Over the years, we have grown from a small establishment into a renowned dining destination, celebrated for our commitment to excellence and our passion for culinary artistry.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
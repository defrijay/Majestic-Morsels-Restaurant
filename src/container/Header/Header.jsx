import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    <SubHeading title = "Chase the new flavour" />
    <h1 className="headtext__cormorant">The Key To Fine Dining</h1>
    <p className="p__opensans" style={{margin : '2rem 0'}}>
    Indulge in an exquisite culinary journey where each bite promises an adventure. At Majestic Restaurant, we believe in chasing new flavors, curating dishes that redefine the essence of fine dining. Come, savor the magic, and discover why we are the epitome of gourmet excellence.
    </p>
    <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;

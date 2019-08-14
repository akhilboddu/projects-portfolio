import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Card from '../components/card';
import Footer from '../components/footer';
import Contact from '../components/contact';

import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Get in touch with us :)" subtitle="Get your work done efficiently with smooth cooperation!" />
    <h3>Contact Us</h3>
    <hr />
    <div className="row">
      <Contact />
    </div>

    <Footer />
  </div>
);

export default App;

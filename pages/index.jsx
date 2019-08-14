import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../static/css/pages.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Frontend to Backend." subtitle="A list of projects we worked on" />
    <h3>Past Projects</h3>
    <hr />
    <div className="row mb-3">
      <div className="col-md-4">
        <Picture source="../static/pics/sdbeer.png" alt="sdbeer" deployed="https://www.sdbeer.com/" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/jobApp.png" alt="whistlr" deployed="https://jobothehunt.herokuapp.com/" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/jobApp.png" alt="whistlr" deployed="https://jobothehunt.herokuapp.com/" />
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-md-6">
        <Picture source="../static/pics/sdbeer.png" alt="sdbeer" deployed="https://www.sdbeer.com/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/jobApp.png" alt="whistlr" deployed="https://jobothehunt.herokuapp.com/" />
      </div>
      <hr />
    </div>
    <div className="row mb-3">
      <div className="col-md-4">
        <Picture source="../static/pics/sdbeer.png" alt="sdbeer" deployed="https://www.sdbeer.com/" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/jobApp.png" alt="whistlr" deployed="https://jobothehunt.herokuapp.com/" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/jobApp.png" alt="whistlr" deployed="https://jobothehunt.herokuapp.com/" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;

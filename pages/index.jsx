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
        <Picture source="../static/projects/Optichem.jpeg" alt="Optichem Website" deployed="http://www.optichem2000.com" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/projects/hashtag.jpeg" alt="HashTag Malawi" deployed="http://u857948635.hostingerapp.com" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/projects/toyota.jpeg" alt="Toyota Malawi" deployed="http://www.toyotamalawi.com/" />
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-md-6">
        <Picture source="../static/projects/sentimentanalysis.jpg" alt="Sentiment Analysis" deployed="https://sentiment-analysis-twitter.herokuapp.com/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/projects/decisionmaker.jpg" alt="React Decision Maker" deployed="https://react-app-decision-maker.herokuapp.com/" />
      </div>
      <hr />
    </div>
    <div className="row mb-3">
      <div className="col-md-4">
        <Picture source="../static/projects/expenses-tracking.jpg" alt="Expenses Tracking" deployed="https://react-app-exenses-tracking.herokuapp.com/" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/projects/regressionapp.jpg" alt="Regression App" deployed="https://jovial-archimedes-88814f.netlify.com/core" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/projects/TodoApp.jpg" alt="whistlr" deployed="https://mern-fullstack-todo.netlify.com/" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;

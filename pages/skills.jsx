import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import IconImage from '../components/iconImage';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Coffee to Code." subtitle="We enjoy working hard to deliver quality code" />
    <h3 className="skills">Our Skills</h3>
    <hr />
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../static/pics/html.png" alt="html" />
            <IconImage source="../static/pics/bootstrap.png" alt="bootstrap" />
            <IconImage source="../static/pics/css.png" alt="css" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/githubIcon.png" alt="github" />
            <IconImage source="../static/pics/handlebars.png" alt="handlebars" />
            <IconImage source="../static/pics/javascript.png" alt="javascript" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../static/pics/jquery.png" alt="jquery" />
            <IconImage source="../static/pics/mern.jpg" alt="mern" />
            <IconImage source="../static/pics/mongodb.png" alt="mongodb" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/mysql.png" alt="mysql" />
            <IconImage source="../static/pics/nodejs.png" alt="node" />
            <IconImage source="../static/pics/React.png" alt="react" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;

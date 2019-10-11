import React, { Component } from 'react';
import { Jumbotron, ProgressBar } from 'react-bootstrap';

class Description extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <section style={{ padding: '2em', backgroundColor: '#bbddff' }}>
        <Jumbotron style={{ maxWidth: '40em', margin: '0 auto', padding: '2em', borderRadius: '0.5em' }}>
          <h4>About me</h4>
          <div style={{ fontSize: '1.1em' }}>Hi, my name is Wu Yeuk Fei, Donald.</div><br />
          <div style={{ fontSize: '1.1em' }}>I find I like programming when I studied in my final year. I feel satisfied after I solve the problem and create something useful.</div><br />
          <div style={{ fontSize: '1.1em' }}>I can do web frontend, backend API and android.</div><br />
          <div style={{ fontSize: '1.1em' }}>Email or connect me, I will tell you more.</div>
        </Jumbotron>

        <Jumbotron style={{ maxWidth: '40em', margin: '3em auto', padding: '2em', borderRadius: '0.5em' }}>
          <i className="fa fa-map-marker fa-lg" style={{ opacity: '0.5' }}></i>&nbsp;&nbsp;Hong Kong<br /><br />
          <i className="fa fa-home fa-lg" style={{ opacity: '0.5' }}></i>&nbsp;&nbsp;Hong Kong<br /><br />
          <i className="fa fa-envelope-o fa-lg" style={{ opacity: '0.5' }}></i>&nbsp;&nbsp;yeukfei02@gmail.com<br /><br />
        </Jumbotron>

        <Jumbotron style={{ maxWidth: '40em', margin: '3em auto', padding: '2em', borderRadius: '0.5em' }}>
          <h4>Education</h4>
          <i className="fa fa-graduation-cap fa-lg" style={{ opacity: '0.5' }}></i>&nbsp;&nbsp;<b style={{ fontSize: '1.2em' }}>Nanyang Technological University</b><div>MSc (Information Systems)</div><br />
          <i className="fa fa-graduation-cap fa-lg" style={{ opacity: '0.5' }}></i>&nbsp;&nbsp;<b style={{ fontSize: '1.2em' }}>City University of Hong Kong</b><div>BBA (Information Management)</div>
        </Jumbotron>

        <Jumbotron style={{ maxWidth: '40em', margin: '3em auto', padding: '2em', borderRadius: '0.5em' }}>
          <h4>Languages</h4>
          <div style={{ margin: '0.5em auto' }}>English&nbsp;&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star-o fa-lg"></i>&nbsp;<i className="fa fa-star-o fa-lg"></i></div>
          <div style={{ margin: '0.5em auto' }}>Cantonese&nbsp;&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i></div>
          <div>Mandarin&nbsp;&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star fa-lg" style={{ color: '#CCCC00' }}></i>&nbsp;<i className="fa fa-star-o fa-lg"></i></div>
        </Jumbotron>

        <Jumbotron style={{ maxWidth: '40em', margin: '3em auto', padding: '2em', borderRadius: '0.5em' }}>
          <h4>Computer skills</h4>

          <div>JavaScript (React.js, Node.js)</div>
          <ProgressBar bsStyle="success" now={90} />

          <div>Java (Android, Kotlin)</div>
          <ProgressBar bsStyle="success" now={85} />

          <div>Go</div>
          <ProgressBar bsStyle="success" now={60} />

          <div>CSS (SASS)</div>
          <ProgressBar bsStyle="success" now={75} />

          <div>Postgres</div>
          <ProgressBar bsStyle="warning" now={60} />

          <div>MongoDB</div>
          <ProgressBar bsStyle="warning" now={50} />

          <div>Docker</div>
          <ProgressBar bsStyle="danger" now={40} />

          <div>Unix Shell Scripting</div>
          <ProgressBar bsStyle="danger" now={30} />
        </Jumbotron>
      </section>
    );
  }
}

export default Description;

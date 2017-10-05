import React, { Component } from 'react';
import { Jumbotron, ProgressBar } from 'react-bootstrap';

import './Section2.css';

class Section2 extends Component {
  openPage() {
    window.open('http://yeukfei02.com');
  }

  render() {
    return (
    	<section id="section2">
    		<Jumbotron id="jumbotron">
                <h4>About me</h4>
                <div>My name is Wu Yeuk Fei, Donald. I graduated from Nanyang Technological University for my master and City University of Hong Kong for my bachelor. My major is Information Systems.</div><br/>
                <div>I found I like programming when I was studying in my final year. Developing application could be interesting and fun, at least I get satisfied after I created something that can help others in their life.</div><br/>
                <div>I write web apps, mobile apps and games.</div><br/>
                <div>Email me and I will tell you more :)</div>
            </Jumbotron>

            <Jumbotron id="jumbotron2">
                <i class="fa fa-map-marker fa-lg"></i>&nbsp;&nbsp;Hong Kong<br/><br/>
                <i class="fa fa-home fa-lg"></i>&nbsp;&nbsp;Hong Kong<br/><br/>
                <i class="fa fa-envelope-o fa-lg"></i>&nbsp;&nbsp;yeukfei02@gmail.com<br/><br/>
                <i class="fa fa-link fa-lg"></i>&nbsp;&nbsp;<span onClick={this.openPage}>http://yeukfei02.com</span>
            </Jumbotron>

            <Jumbotron id="jumbotron3">
                <h4>Education</h4>
                <i class="fa fa-graduation-cap fa-lg"></i>&nbsp;&nbsp;<b>Nanyang Technological University</b><div>MSc (Information Systems)</div><br/>
                <i class="fa fa-graduation-cap fa-lg"></i>&nbsp;&nbsp;<b>City University of Hong Kong</b><div>BBA (Information Management)</div>
            </Jumbotron>

            <Jumbotron id="jumbotron4">
                <h4>Languages</h4>
                <div id="langDiv1">English&nbsp;&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star-o fa-lg"></i>&nbsp;<i class="fa fa-star-o fa-lg"></i></div>
                <div id="langDiv2">Cantonese&nbsp;&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star fa-lg"></i></div>
                <div id="langDiv3">Mandarin&nbsp;&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star fa-lg"></i>&nbsp;<i class="fa fa-star-o fa-lg"></i></div>
            </Jumbotron>

            <Jumbotron id="jumbotron5">
                <h4>Computer skills</h4>

                <div>JavaScript (AngularJS, React.js, Node.js)</div>
                <ProgressBar bsStyle="success" now={90} />

                <div>Java (Android)</div>
                <ProgressBar bsStyle="success" now={80} />

                <div>CSS (SASS)</div>
                <ProgressBar bsStyle="success" now={70} />

                <div>MySQL</div>
                <ProgressBar bsStyle="warning" now={60} />

                <div>Oracle</div>
                <ProgressBar bsStyle="warning" now={50} />

                <div>MongoDB</div>
                <ProgressBar bsStyle="warning" now={30} />

                <div>Unix Shell Scripting</div>
                <ProgressBar bsStyle="danger" now={20} />
            </Jumbotron>
    	</section>
    );
  }
}

export default Section2;





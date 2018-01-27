import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import '../../../node_modules/animate.css/animate.min.css';
import './Section.css';

class Section extends Component {
  componentDidMount() {
    window.addEventListener('load', this.imageAnimate);
  }

  imageAnimate() {
    let image = document.querySelector('#image');
    image.className += ' animated bounceInUp';

  }

  mouseEnterImage() {
    let image = document.querySelector('#image');
    image.style.cursor = 'pointer';
  }

  clickImage() {
    let image = document.querySelector('#image');
    image.className -= ' animated bounceInUp';
    image.className += ' img-responsive img-circle animated zoomIn';
  }

  clickFacebook() {
  	window.open('https://www.facebook.com/yeukfei02');
  }

  clickLinkedin() {
  	window.open('https://hk.linkedin.com/in/donald-wu-83257370');
  }

  clickGooglePlus() {
  	window.open('https://plus.google.com/108258102920680009798/about');
  }

  clickTwitter() {
  	window.open('https://twitter.com/yeukfei02');
  }

  clickGithub() {
  	window.open('https://github.com/yeukfei02');
  }

  render() {
    return (
    	<section>
    		<Image id="image" src="https://lh4.googleusercontent.com/-NfdeLMWx1fs/U8DWKAQH3RI/AAAAAAAAAfs/Hfu2SlsS6dQ/s1230-no/profile.jpg" circle responsive onClick={this.clickImage} onMouseEnter={this.mouseEnterImage} />
    		<h2>Wu Yeuk Fei (Donald)</h2>
    		<h3>Developer</h3>
    		<h4>Skype id: yeukfei02</h4>
    		<div id="socialIcons">
    			<span id="facebook" class="fa-stack fa-lg" onClick={this.clickFacebook}>
	            	<i class="fa fa-circle fa-stack-2x"></i>
	            	<i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
	          	</span>

		        <span id="linkedin" class="fa-stack fa-lg" onClick={this.clickLinkedin}>
		            <i class="fa fa-circle fa-stack-2x"></i>
		            <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
		        </span>

		        <span id="google-plus" class="fa-stack fa-lg" onClick={this.clickGooglePlus}>
		            <i class="fa fa-circle fa-stack-2x"></i>
		            <i class="fa fa-google-plus fa-stack-1x fa-inverse"></i>
		        </span>

		        <span id="twitter" class="fa-stack fa-lg" onClick={this.clickTwitter}>
		            <i class="fa fa-circle fa-stack-2x"></i>
		            <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
		        </span>

		        <span id="github" class="fa-stack fa-lg" onClick={this.clickGithub}>
		            <i class="fa fa-circle fa-stack-2x"></i>
		            <i class="fa fa-github-alt fa-stack-1x fa-inverse"></i>
		        </span>

		        <a id="email-me" class="btn btn-success" href="mailto:yeukfei02@gmail.com"><i class="fa fa-envelope-o"></i>&nbsp;&nbsp;Email me</a>
    		</div>
    	</section>
    );
  }
}

export default Section;





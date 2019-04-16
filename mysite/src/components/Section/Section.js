import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import '../../../node_modules/animate.css/animate.min.css';

class Section extends Component {
  componentDidMount() {
    window.addEventListener('load', this.handleImageAnimate);
  }

  handleImageAnimate = () => {
    const image = document.querySelector('#image');
    image.className += ' animated bounceInUp';
  }

  handleMouseEnterImage = (e) => {
    e.target.style.cursor = 'pointer';
  }

  handleClickImage = (e) => {
    e.target.className -= ' animated bounceInUp';
    e.target.className += ' img-responsive img-circle animated zoomIn';
  }

  handleMouseEnterSpan = (e) => {
    e.target.parentElement.style.opacity = '0.7';
    e.target.parentElement.style.cursor = 'pointer';
  }

  handleMouseLeaveSpan = (e) => {
    e.target.parentElement.style.opacity = '0.3';
  }

  clickFacebook = () => {
    window.open('https://www.facebook.com/yeukfei02');
  }

  clickLinkedin = () => {
    window.open('https://hk.linkedin.com/in/donald-wu-83257370');
  }

  clickTwitter = () => {
    window.open('https://twitter.com/yeukfei02');
  }

  clickGithub = () => {
    window.open('https://github.com/yeukfei02');
  }

  render() {
    return (
      <section style={{ margin: '0', padding: '2em', backgroundColor: '#d8f3fc' }}>
        <Image
          id="image"
          style={{ width: '12em', height: '12em', margin: '0 auto' }}
          src="https://lh4.googleusercontent.com/-NfdeLMWx1fs/U8DWKAQH3RI/AAAAAAAAAfs/Hfu2SlsS6dQ/s1230-no/profile.jpg"
          circle
          responsive
          onClick={(e) => this.handleClickImage(e)}
          onMouseEnter={(e) => this.handleMouseEnterImage(e)}
        />
        <h2 style={{ textAlign: 'center' }}>Wu Yeuk Fei (Donald)</h2>
        <h3 style={{ textAlign: 'center' }}>Software Developer</h3>
        <h4 style={{ textAlign: 'center' }}>Skype id: yeukfei02</h4>
        <h4 style={{ textAlign: 'center' }}>Angellist: angel.co/yeukfei02</h4>
        <div style={{ width: '25em', margin: '0 auto' }}>
          <span
            style={{ marginLeft: '0.2em', opacity: '0.3' }}
            className="fa-stack fa-lg"
            onClick={this.clickFacebook}
            onMouseEnter={(e) => this.handleMouseEnterSpan(e)}
            onMouseLeave={(e) => this.handleMouseLeaveSpan(e)}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
          </span>

          <span
            style={{ marginLeft: '0.2em', opacity: '0.3' }}
            className="fa-stack fa-lg"
            onClick={this.clickLinkedin}
            onMouseEnter={(e) => this.handleMouseEnterSpan(e)}
            onMouseLeave={(e) => this.handleMouseLeaveSpan(e)}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
          </span>

          <span
            style={{ marginLeft: '0.2em', opacity: '0.3' }}
            className="fa-stack fa-lg"
            onClick={this.clickTwitter}
            onMouseEnter={(e) => this.handleMouseEnterSpan(e)}
            onMouseLeave={(e) => this.handleMouseLeaveSpan(e)}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
          </span>

          <span
            style={{ marginLeft: '0.2em', opacity: '0.3' }}
            className="fa-stack fa-lg"
            onClick={this.clickGithub}
            onMouseEnter={(e) => this.handleMouseEnterSpan(e)}
            onMouseLeave={(e) => this.handleMouseLeaveSpan(e)}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-github-alt fa-stack-1x fa-inverse"></i>
          </span>

          <a
            style={{ marginLeft: '1em' }}
            className="btn btn-success"
            href="mailto:yeukfei02@gmail.com">
            <i className="fa fa-envelope-o"></i>
            &nbsp;&nbsp;Email me
            </a>
        </div>
      </section>
    );
  }
}

export default Section;

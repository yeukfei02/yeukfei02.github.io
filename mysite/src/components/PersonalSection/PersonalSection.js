import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import profilePic from '../../images/profile.png';

class PersonalSection extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {

  }

  handleMouseEnterSpan(e) {
    e.target.parentElement.style.opacity = '0.7';
    e.target.parentElement.style.cursor = 'pointer';
  }

  handleMouseLeaveSpan(e) {
    e.target.parentElement.style.opacity = '0.3';
  }

  handleFacebookClick() {
    window.open('https://www.facebook.com/yeukfei02');
  }

  handleLinkedinClick() {
    window.open('https://www.linkedin.com/in/donaldwu02');
  }

  handleTwitterClick() {
    window.open('https://twitter.com/yeukfei02');
  }

  handleGithubClick() {
    window.open('https://github.com/yeukfei02');
  }

  render() {
    return (
      <section style={{ margin: '0', padding: '2em', backgroundColor: '#d8f3fc' }}>
        <Image
          style={{ width: '10em', height: '10em', margin: '0 auto' }}
          src={profilePic}
          round
          responsive
        />
        <h2 style={{ textAlign: 'center' }}>Wu Yeuk Fei (Donald)</h2>
        <h3 style={{ textAlign: 'center' }}>Software Developer</h3>
        <h4 style={{ textAlign: 'center' }}>Skype id: yeukfei02</h4>
        <h4 style={{ textAlign: 'center' }}>AngelList: angel.co/yeukfei02</h4>
        <div style={{ width: '25em', margin: '0 auto' }}>
          <span
            style={{ marginLeft: '0.2em', opacity: '0.3' }}
            className="fa-stack fa-lg"
            onClick={() => this.handleFacebookClick()}
            onMouseEnter={(e) => this.handleMouseEnterSpan(e)}
            onMouseLeave={(e) => this.handleMouseLeaveSpan(e)}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
          </span>

          <span
            style={{ marginLeft: '0.2em', opacity: '0.3' }}
            className="fa-stack fa-lg"
            onClick={() => this.handleLinkedinClick()}
            onMouseEnter={(e) => this.handleMouseEnterSpan(e)}
            onMouseLeave={(e) => this.handleMouseLeaveSpan(e)}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
          </span>

          <span
            style={{ marginLeft: '0.2em', opacity: '0.3' }}
            className="fa-stack fa-lg"
            onClick={() => this.handleTwitterClick()}
            onMouseEnter={(e) => this.handleMouseEnterSpan(e)}
            onMouseLeave={(e) => this.handleMouseLeaveSpan(e)}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
          </span>

          <span
            style={{ marginLeft: '0.2em', opacity: '0.3' }}
            className="fa-stack fa-lg"
            onClick={() => this.handleGithubClick()}
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

export default PersonalSection;

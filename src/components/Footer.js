import React, { Component } from 'react';
import { FOOTER } from '../constants';

class Footer extends Component {
    render() {
      function createFooter(a) {
        return { __html: a }
      }
      return ([
        <a href="https://github.com/Nei-V/drum-machine" className="linkToGithub">The Github Repository of This project</a>,
        <div id="footerInReact" dangerouslySetInnerHTML={createFooter(FOOTER)}>
        </div>
      ])
    }
  }

export default Footer;
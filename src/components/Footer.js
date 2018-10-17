import React, { Component } from 'react';
import { FOOTER } from '../constants';

class Footer extends Component {
    render() {
      function createFooter(a) {
        return { __html: a }
      }
      return (
        <div id="footerInReact" dangerouslySetInnerHTML={createFooter(FOOTER)}>
        </div>
      )
    }
  }

export default Footer;
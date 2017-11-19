import React, { Component } from 'react';
import styled from 'styled-components';

const footerHeight = '40px';

const FooterB = styled.footer`
position: absolute;
bottom: 0;
width: 100%;
line-height: ${footerHeight};
height: ${footerHeight};
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterB>
        <div className="text-center">&copy; 2017. WiAGate'17 Internship Team.</div>
      </FooterB>
    );
  }
}

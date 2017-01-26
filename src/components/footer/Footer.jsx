import React from 'react';
import {Layout, Header, Content, Footer, FooterSection,
  FooterLinkList } from 'react-mdl';

export default class Footers extends React.Component {
  render() {
    return (
      <div> 
            <Footer size="mega">
              <FooterSection type="bottom" logo="More Information">
                <FooterLinkList>
                  <a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a>
                  <a href="#">Help</a>
                  <a href="#">Privacy & Terms</a>
                </FooterLinkList>
              </FooterSection>
            </Footer>
      </div>
    );
  }
}

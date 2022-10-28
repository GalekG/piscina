import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default class Community extends Component {
  render() {
    return (
      <FacebookProvider appId="1275978183224592">
        <Page href="https://www.facebook.com/CRLaPlayita" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}
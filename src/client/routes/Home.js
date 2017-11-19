import React, { Component } from 'react';
import PageLayout from '../common/components/PageLayout';

export default class Home extends Component {
  render() {
    return (
      <PageLayout>
        <div className="App">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </PageLayout>
    );
  }
}

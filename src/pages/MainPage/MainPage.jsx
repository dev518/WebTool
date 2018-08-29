import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction';

export default class MainPage extends Component {
  static displayName = 'MainPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-page-page">
        <AbilityIntroduction />
      </div>
    );
  }
}

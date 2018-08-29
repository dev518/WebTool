import React, { Component } from 'react';
import TagTable from './components/TagTable';

export default class AbPage extends Component {
  static displayName = 'AbPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ab-page-page">
        <TagTable />
      </div>
    );
  }
}

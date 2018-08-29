import React, { Component } from 'react';
import DetailTable from './components/DetailTable';

export default class ClientPage extends Component {
  static displayName = 'ClientPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="client-page-page">
        <DetailTable />
      </div>
    );
  }
}

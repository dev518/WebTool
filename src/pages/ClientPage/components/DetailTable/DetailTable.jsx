import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import axios from 'axios';

export default class DetailTable extends Component {
  static displayName = 'DetailTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

 componentDidMount() {

    // 使用 axios 获取数据
    axios.post('http://10.32.151.8:5389/connect').then((response) => {
      const { data } = response;
      this.setState({
        arrs: data,
      });
    });
  }


  render() {
    return (
      <div className="detail-table">
        <IceContainer title="客户端信息">
          <ul style={styles.detailTable}>
             {this.state.arrs && this.state.arrs.map((item,index) =>{
          return (<li style={styles.detailItem}>
              <div style={styles.detailTitle}>{item.name}</div>
              <div style={styles.detailBody}>{item.value}</div>
            </li>)
        })}
          </ul>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  detailItem: {
    padding: '15px 0px',
    display: 'flex',
    borderTop: '1px solid #EEEFF3',
  },
  detailTitle: {
    marginRight: '30px',
    textAlign: 'right',
    width: '120px',
    color: '#999999',
  },
  detailBody: {
    flex: 1,
  },
  statusProcessing: {
    color: '#64D874',
  },
};

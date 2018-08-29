import React, { Component } from 'react';
import { Grid } from '@icedesign/base';
import axios from 'axios';

const { Row, Col } = Grid;

const frameworkIcon = require('./images/framework_icon.png');
const componentIcon = require('./images/component_icon.png');
const apiIcon = require('./images/api_icon.png');

const qrcodeImg = require('../../../../hello_flask/snake_qrcode.png');
const abilities = [
  {
    icon: frameworkIcon,
    title: 'AB同步',
    content: '客户端AB实验',
    link: '/#/ABPage',
  },
  {
    icon: componentIcon,
    title: '本地打包',
    content: '支持本地打包',
    link: '/components/',
  },
  {
    icon: apiIcon,
    title: '客户端信息查看',
    content: '查看cid、vid',
    link: '/#/ClientPage',
  },
];

export default class AbilityIntroduction extends Component {
  renderAblities = () => {
    return abilities.map(({ icon, title, content, link }, idx) => {
      return (
        <Col xxs="24" l="8" style={styles.item} key={idx}>
          <img src={icon} style={{ width: '160px', height: '160px' }} alt="" />
          <div style={{ fontSize: '24px', color: '#333', marginBottom: '6px' }}>
            {title}
          </div>
          <div
            style={{
              width: '182px',
              fontSize: '16px',
              color: '#6D7A82',
              marginBottom: '30px',
              lineHeight: '1.7em',
            }}
          >
            {content}
          </div>
          <a href={link} style={{ color: '#00B0CF', fontSize: '16px' }}>
            了解更多
            <div
              style={{
                background: '#00B0CF',
                width: '26px',
                height: '26px',
                borderRadius: '13px',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '10px',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  marginLeft: '-4px', // -10 * sqrt(2) / 4
                  width: '10px',
                  height: '10px',
                  borderRight: '1px solid #fff',
                  borderBottom: '1px solid #fff',
                  transform: 'rotate(-45deg)',
                }}
              />
            </div>
          </a>
        </Col>
      );
    });
  };
  

   componentDidMount() {

    // 使用 axios 获取数据
    axios.post('http://10.32.151.8:5389/qrcode',{
    value: 'ctrip://wireless/hotel_replenishInvoice?orderID=asdasddasd',
   
  }).then((response) => {
      const { data } = response;
      this.setState({
        arrs: data,
      });
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>酒店App调试平台</div>
        <div style={styles.subtitle}>&lt; Hotel APP Debug Platform &gt;</div>
        <img src={qrcodeImg} style={{ width: '160px', height: '160px' }} alt="" />
        <Row wrap style={styles.group}>
          {this.renderAblities()}
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    background: '#fafafa',
    padding: '70px 70px 140px',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: '48px',
    whiteSpace: 'nowrap',
    marginBottom: '10px',
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
  },
  item: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
};

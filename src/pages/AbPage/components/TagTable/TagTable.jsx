/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Table, Input, Select, Grid } from '@icedesign/base';
import { FormBinderWrapper, FormBinder } from '@icedesign/form-binder';
import IceCard from '@icedesign/card';

const { Combobox } = Select;
const { Row, Col } = Grid;

const dataSource = [
  {
    name: '180809_hod_crets',
    level: '审核通过',
    assets: {
      needFix: 'iceworks',
      unHandle: 'ice grid',
    },
    time: '2018-01-25 15:55:06',
  },
  {
    name: '180809_hod_crets',
    level: '低危',
    assets: {
      needFix: 'ice button',
      unHandle: 'ice tag',
    },
    time: '2018-01-25 15:55:06',
  },
  {
    name: '180809_hod_crets',
    level: '严重',
    assets: {
      needFix: 'ice datepicker',
      unHandle: '',
    },
    time: '2018-01-25 15:55:06',
  },
];

export default class TagTable extends Component {
  static displayName = 'TagTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      formValue: {},
    };
  }

  


  getDataSource = () => {
    const { formValue } = this.state;
    return dataSource.filter((data) => {
      // 预先筛除
      if (formValue.name && !data.name.match(formValue.name)) {
        return false;
      }

      if (
        formValue.isHandle &&
        ((formValue.isHandle === 'YES' && data.assets.unHandle) ||
          (formValue.isHandle === 'NO' && !data.assets.unHandle))
      ) {
        return false;
      }

      if (
        formValue.levels &&
        !formValue.levels.some((l) => {
          return l === data.level;
        })
      ) {
        return false;
      }

      return true;
    });
  };

  formChange = (value) => {
    console.log('changed value', value);
    this.setState({
      formValue: value,
    });
  };

  render() {
    const { formValue } = this.state;

    return (
      <div className="tag-table">
        <IceCard>
          <FormBinderWrapper value={formValue} onChange={this.formChange}>
            <div style={{ marginBottom: '25px' }}>
              <Row style={styles.formRow}>
                <Col xxs="6" s="4" l="2" style={styles.label}>
                  AB搜索:{' '}
                </Col>
                <Col span="10">
                  <FormBinder>
                    <Input name="name" placeholder="请输入AB名称" />
                  </FormBinder>
                </Col>
              </Row>
              <Row style={styles.formRow}>
                <Col xxs="6" s="4" l="2" style={styles.label}>
                  处理状态:{' '}
                </Col>
                <Col span="10">
                  <FormBinder>
                    <Select name="isHandle" placeholder="请选择">
                      <Select.Option value="">任意</Select.Option>
                      <Select.Option value="YES">已经处理</Select.Option>
                      <Select.Option value="NO">未处理</Select.Option>
                    </Select>
                  </FormBinder>
                </Col>
              </Row>
            </div>
          </FormBinderWrapper>

          <Table
            locale={{ empty: '没有查询到符合条件的记录' }}
            dataSource={this.getDataSource()}
          >
            <Table.Column title="AB名称" dataIndex="name" width={200} />
            <Table.Column title="当前状态" dataIndex="level" width={200} />
            <Table.Column
              title="需尽快修复资产"
              dataIndex="assets.needFix"
              width={200}
            />
            <Table.Column
              title="当前未处理资产"
              dataIndex="assets.unHandle"
              width={200}
              cell={(val) => {
                return val || '无';
              }}
            />
            <Table.Column title="开始时间" dataIndex="time" width={200} />
            <Table.Column title="结束时间" dataIndex="time" width={200} />
          </Table>
        </IceCard>
      </div>
    );
  }
}

const styles = {
  formRow: {
    marginBottom: '18px',
  },
  label: { lineHeight: '28px', paddingRight: '10px' },
};

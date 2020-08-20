
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA } from '@store/OBS/check/action';
import './index.scss';
import { Button, Input, Col, Checkbox, Modal, Row, Form, Tag, message } from 'antd';
import kindName from 'classnames';
import MyTable from '@/components/Table';



const mapStateToProps = ({ CHECK }) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}


class Check extends React.Component {
    state = {
        value: 'test',
        expandedRowKeys: [],
        selectedRowKeys: [],
        activeIndex: 0,
        dataSource: [
            { id: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
            { id: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
            { id: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' }
        ],
        columns: [
            { title: '资源名称', dataIndex: 'name', key: 'name' },
            { title: '作者', dataIndex: 'age', key: 'age' },
            { title: '资源类型', dataIndex: 'age', key: 'age' },
            { title: '学习方向分类', dataIndex: 'age', key: 'age' },
            { title: '职校专业分类', dataIndex: 'age', key: 'age' },
            { title: '资源格式', dataIndex: 'age', key: 'age' },
            { title: '上传人', dataIndex: 'age', key: 'age' },
            { title: '上传时间', dataIndex: 'age', key: 'age' },
            {
                title: '操作', dataIndex: 'address', key: 'address',
                render: () => <p className='action vertical_j'>
                    <span>查看</span>
                    <span>通过</span>
                    <span>不通过</span>
                </p>
            }
        ]
    }
    change = (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys)
        this.setState({ selectedRowKeys })
    }
    callBack = (index) => {
        this.setState({ activeIndex: index });
    }
    //全选 反选
    checkedAll = () => {
        let { dataSource, selectedRowKeys } = this.state;
        if (selectedRowKeys.length === dataSource.length) {
            this.setState({ selectedRowKeys: [] });
            return;
        }
        this.setState({ selectedRowKeys: dataSource.map(v => v.id) });
    }
    //批量通过
    batchSure = () => {
        let { selectedRowKeys } = this.state;
        if (!selectedRowKeys.length) {
            message.warning('请选择');
            return;
        }
        console.log(selectedRowKeys)
    }
    //批量不通过
    noBatchSure = () => {
        let { selectedRowKeys } = this.state;
        if (!selectedRowKeys.length) {
            message.warning('请选择');
            return;
        }
        console.log(selectedRowKeys)
    }
    render() {
        const { columns, selectedRowKeys, activeIndex, dataSource } = this.state;
        return (
            <div className='check_box'>
                <div className="wrapper padd">
                    {/* <div className='tabs'>
                        <Tag onClick={() => this.callBack(0)} className={kindName({ 'active': activeIndex == 0 })}>专题资源（20）</Tag>
                        <Tag onClick={() => this.callBack(1)} className={kindName({ 'active': activeIndex == 1 })}>专业资源（20）</Tag>
                    </div> */}
                    <div className="top">
                        <Col className='top_r' span={12}>
                            <Input placeholder='请输入审核或子题的审核名称' />
                            <Button className='reset_btn'>重置</Button>
                            <Button type='primary' className='search'>查询</Button>
                        </Col>
                    </div>
                    <div className="check_container" style={{ position: 'relative' }}>
                        <MyTable
                            className='table_h'
                            options={{
                                columns,
                                dataSource,
                                rowSelection: {
                                    selectedRowKeys: selectedRowKeys,
                                    onChange: this.change
                                },
                                pagination: true
                            }}
                        />
                        <div className="batch_box">
                            <span>
                                <Checkbox
                                    checked={selectedRowKeys.length === dataSource.length ? true : false}
                                    onChange={this.checkedAll}
                                />
                                <span>全选</span>
                            </span>
                            <Button className='ant_blue' onClick={this.batchSure} type='primary'>批量通过</Button>
                            <Button onClick={this.noBatchSure}>批量不通过</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


Check = connect(mapStateToProps, mapDispatchToProps)(Check);
export default Check;
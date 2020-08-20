
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA } from '@store/OBS/check/action';
import './index.scss';
import { Button, Input, Col, Table, Modal, Row, Form, Tag } from 'antd';
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
        visibily: false,
        expandedRowKeys: [],
        isDrab: false,
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
    //展开 收起
    open = (record) => {
        const { id: key } = record;
        const filtered = this.state.expandedRowKeys;
        if (this.state.expandedRowKeys.includes(key)) {
            filtered.splice(filtered.findIndex(element => element === key), 1);
        } else {
            filtered.push(key);
        }
        this.setState({
            expandedRowKeys: filtered,
        });
        console.log(filtered)
    }
    //取消
    canale = () => {
        this.setState({ visibily: false });
    }
    //保存
    save = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                this.setState({ visibily: false });
            }
        })
    }
    //编辑
    edit = () => {
        this.setState({ visibily: true });
    }
    //添加
    add = () => {
        this.setState({ visibily: true });
    }
    change = (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys)
        this.setState({ selectedRowKeys })
    }
    callBack = (index) => {
        this.setState({ activeIndex: index });
    }
    render() {
        const sp = <span>0/15</span>;
        const sonSp = <span>0/15</span>;
        const { columns, selectedRowKeys, visibily, activeIndex, dataSource, isDrab } = this.state;
        const { getFieldDecorator } = this.props.form;

        return (
            <div className='check_box'>
                <div className="top m20 p20"  style={{ display: isDrab ? 'none' : 'flex' }}>

                    <Col className='top_r' span={12}>
                        <Input placeholder='请输入审核或子题的审核名称' />
                        <Button className='reset_btn'>重置</Button>
                        <Button type='primary' className='search'>查询</Button>
                    </Col>
                </div>
                <div className="wrapper padd">
                    <div className='tabs'>
                        <Tag onClick={() => this.callBack(0)} className={kindName({ 'active': activeIndex == 0 })}>专题资源（20）</Tag>
                        <Tag onClick={() => this.callBack(1)} className={kindName({ 'active': activeIndex == 1 })}>专业资源（20）</Tag>
                    </div>
                    <div className="special_container">
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
                    </div>
                </div>
                <Modal
                    title='新建审核'
                    wrapClassName='modal_box'
                    visible={visibily}
                    closable={false}
                    footer={
                        <div className='modal_btn_j'>
                            <Button onClick={this.canale}>取消</Button>
                            <Button onClick={this.save} type='primary'>保存</Button>
                        </div>
                    }
                >
                    <Form>
                        <Form.Item>
                            <Row>
                                <Col span={5}>
                                    <span><span className='red'>*</span>审核名称</span>
                                </Col>
                                <Col span={15}>
                                    {
                                        getFieldDecorator('name', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请输入审核名称'
                                                }
                                            ]
                                        })(<Input placeholder='请输入审核名称' suffix={sp} />)
                                    }
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <Col span={5}>
                                    <span><span className='red'>*</span>子审核名称</span>
                                </Col>
                                <Col span={15}>
                                    {
                                        getFieldDecorator('sonName', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请输入子审核名称'
                                                }
                                            ]
                                        })(<Input placeholder='请输入子审核名称' suffix={sonSp} />)
                                    }
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}


Check = connect(mapStateToProps, mapDispatchToProps)(Check);
Check = Form.create()(Check)
export default Check;
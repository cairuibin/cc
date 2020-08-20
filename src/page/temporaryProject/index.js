
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA } from '@store/OBS/temporaryProject/action'
import { Button, Select, Col, DatePicker, Input, Checkbox } from 'antd';
import MyTable from '@/components/Table';


const mapStateToProps = ({ TEMPORARYPROJECT }) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(class TemporaryProject extends React.Component {
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
            { title: '资源分类', dataIndex: 'age', key: 'age' },
            { title: '推荐栏目', dataIndex: 'age', key: 'age' },
            { title: '资源格式', dataIndex: 'age', key: 'age' },
            { title: '上传人', dataIndex: 'age', key: 'age' },
            { title: '上传时间', dataIndex: 'age', key: 'age' },
            {
                title: '操作', dataIndex: 'address', key: 'address',
                render: () => <p className='action vertical_j'>
                    <span>查看</span>
                    <span>编辑</span>
                </p>
            }
        ]
    }
    render() {
        const { columns, selectedRowKeys, dataSource } = this.state;
        return (
            <div className="temporaryProject_box bg_fff p20">
                <div className='pos_r container'>
                    <div className="filter_box">
                        <Col className='top_r' span={12}>
                            <Input placeholder='输入资源名称/上传人/作者/原专题分类' />
                            <Button className='reset_btn'>重置</Button>
                            <Button type='primary' className='ant_blue'>查询</Button>
                        </Col>
                    </div>
                        <MyTable
                            options={
                                {
                                    dataSource,
                                    columns,
                                    rowSelection: {
                                        onChange: this.change,
                                        selectedRowKeys
                                    },
                                    pagination: true,
                                    onRow: (record, index) => ({
                                        index,
                                        moveRow: this.moveRow,
                                        onClick:()=>this.props.history.push('/transResource/temporaryProject')
                                    })
                                }
                            }
                        />
                    <div className="batch_box">
                        <span>
                            <Checkbox
                                checked={selectedRowKeys.length === dataSource.length ? true : false}
                                onChange={this.checkedAll}
                            />
                            <span>全选</span>
                        </span>
                        <Button className='ant_blue' onClick={this.batchEdit} type='primary'>批量修改</Button>
                    </div>
                </div>
            </div>
        )
    }
})

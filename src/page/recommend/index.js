
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA } from '@store/OBS/recommend/action'
import { Button, Select, Col, DatePicker, Input, Checkbox } from 'antd';
import MyTable from '@/components/Table';
import { component } from '@/components/dragTable';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';


const { Option } = Select;
const { RangePicker } = DatePicker;

const mapStateToProps = ({ RECOMMEND }) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(class Recommend extends React.Component {
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
    change = (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys)
        this.setState({ selectedRowKeys })
    }
    //全选反选切换
    checkedAll = () => {
        let { selectedRowKeys, dataSource } = this.state;
        if (selectedRowKeys.length === dataSource.length) {
            this.setState({ selectedRowKeys: [] });
            return;
        }
        this.setState({ selectedRowKeys: dataSource.map(v => v.id) });
    }
    //批量修改
    batchEdit = () => {

    }
    //拖拽事件
    moveRow = (dragIndex, hoverIndex) => {
        const { dataSource } = this.state;
        const dragRow = dataSource[dragIndex];
        this.setState(
            update(this.state, {
                dataSource: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
                },
            }));
        this.setState({
            hasChanged: true,
        });
    };
    render() {
        const { columns, selectedRowKeys, dataSource } = this.state;
        return (
            <div className='recommend_box' >
                <div className="top p20 bg_fff m20">
                    <Col span={12}>
                        <Select style={{ marginRight: '20px' }} defaultValue={1}>
                            <Option value={1}>热门学习方向</Option>
                            <Option value={2}>2</Option>
                        </Select>
                        <Select defaultValue={2}>
                            <Option value={2}>来自资源字典管理方向分类</Option>
                        </Select>
                    </Col>
                    <Col span={12}>
                        <span style={{ marginRight: '20px' }}>推荐日期：</span>
                        <span>
                            <RangePicker />
                        </span>
                    </Col>
                </div>
                <div className="recommend_wrapper bg_fff p20">
                    <div className='pos_r container'>
                        <div className="filter_box">
                            <Col span={12}>
                                <Button className='sure_sort' type='primary' onClick={this.add}>添加推荐资源</Button>
                            </Col>
                            <Col className='top_r' span={12}>
                                <Input placeholder='请输入资源名称/上传人/作者' />
                                <Button className='reset_btn'>重置</Button>
                                <Button type='primary' className='ant_blue'>查询</Button>
                            </Col>
                        </div>
                        <DndProvider backend={HTML5Backend}>
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
                                            onClick:()=>this.props.history.push('/transResource/recommend')
                                        })
                                    }
                                }

                                isDrab={true}
                            />
                        </DndProvider>
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
            </div>
        )
    }
})

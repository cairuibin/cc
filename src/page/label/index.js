
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
// import { AAA} from '@store/OBS/label/action';
import { Button, Input, Col, Table, Modal, Row, Form } from 'antd';
import { component } from '@/components/dragTable';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import kindName from 'classnames';
import { DndProvider } from 'react-dnd';
import MyTable from '@/components/Table';


const mapStateToProps = ({ LABEL }) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}


class Label extends React.Component {
    state = {
        value: 'test',
        visibily: false,
        expandedRowKeys: [],
        isActive: true,
        isDrab: false,
        dataSource: [
            { id: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
            { id: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
            { id: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' }
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
    //禁止拖拽
    forbidDataDrafting = (val) => {
        document.ondragstart = function () {
            return val;
        };
    }
    componentDidMount() {
        // this.forbidDataDrafting(false);
    }
    sort = () => {
        this.forbidDataDrafting(true);
        this.setState({ isDrab: true });
    }
    //取消排序
    cancelSort = () => {
        this.forbidDataDrafting(false);
        this.setState({ isDrab: false });
    }
    //保存排序
    saveSort = () => {
        this.forbidDataDrafting(false);
        this.setState({ isDrab: false });
    }
    render() {
        const sp = <span>0/15</span>;
        const sonSp = <span>0/15</span>;
        const { value, expandedRowKeys, visibily, isActive, dataSource, isDrab } = this.state;
        const { getFieldDecorator } = this.props.form;
        const columns = [
            { title: '标签名称', dataIndex: 'name', key: 'name' },
            {
                title: '更新时间', dataIndex: 'age', key: 'age',
                sorter: {
                    compare: (a, b) => a.math - b.math,
                    multiple: 2,
                },
            },
            {
                title: '操作', dataIndex: 'address', key: 'address',
                render: () => <p className='action vertical_j'>
                    <span>编辑</span>
                    <span>删除</span>
                </p>
            }
        ];

        return (
            <div className='special_box bg_fff p20'>
                <div className="top" style={{ display: isDrab ? 'none' : 'flex' }}>
                    <Col span={12}>
                        <Button className='sure_sort' type='primary' onClick={this.add}>添加标签</Button>
                        <span className='sort' onClick={this.sort}>🐕 标签排序</span>
                    </Col>
                </div>
                <div className="top" style={{ display: isDrab ? 'flex' : 'none' }}>
                    <Col span={12}>
                        <Button className='sure_sort' type='primary' onClick={this.saveSort}>保存排序</Button>
                        <Button className='cancel_sort' onClick={this.cancelSort}>取消排序</Button>
                        {/* <span className='save'>🐕拖拽后请保存</span> */}
                    </Col>
                </div>
                {/* <div className="alert" style={{ display: isActive ? 'flex' : 'none' }}>
                    <span>
                        🐕 查询到20个标签
                    </span>
                    <span onClick={() => this.setState({ isActive: false })}>
                        X
                    </span>
                </div> */}
                <div className="special_container">
                    <DndProvider backend={HTML5Backend}>
                        <MyTable
                            isDrab={true}
                            options={
                                {
                                    columns,
                                    dataSource,
                                    onRow: (record, index) => ({
                                        index,
                                        moveRow: this.moveRow,
                                    }),
                                    pagination:false
                                }
                            }
                        />
                    </DndProvider>
                </div>
                <Modal
                    title='添加标签'
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
                                    <span><span className='red'>*</span>标签名称</span>
                                </Col>
                                <Col span={15}>
                                    {
                                        getFieldDecorator('name', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请输入标签名称'
                                                }
                                            ]
                                        })(<Input placeholder='请输入标签名称' suffix={sp} />)
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


Label = connect(mapStateToProps, mapDispatchToProps)(Label);
Label = Form.create()(Label);
export default Label;

import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
// import { AAA } from '@store/OBS/special/action';
import { Button, Input, Col, Table, Modal, Row, Form } from 'antd';
import { component } from '@/components/dragTable';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import kindName from 'classnames';
import { DndProvider } from 'react-dnd';
import MyTable from '@/components/Table';


const mapStateToProps = ({ SPECIAL }) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

class Special extends React.Component {
    state = {
        value: 'test',
        visibily: false,
        expandedRowKeys: [],

        isDrab: false,
        dataSource: [
            { id: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
            { id: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
            { id: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' }
        ]
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

    //禁止拖拽
    forbidDataDrafting = (val) => {
        document.ondragstart = function () {
            return val;
        };
    }
    componentDidMount() {
        this.forbidDataDrafting(false);
    }
    sort = () => {
        this.forbidDataDrafting(true);
        this.setState({ isDrab: true });
    }


    //全部展开
    changeAll = (type) => {    //type  = 1? 全部展开 :全部折叠
        if (type === 1) {
            let { expandedRowKeys, dataSource } = this.state;
            expandedRowKeys = dataSource.map(v => v.id);
            this.setState({ expandedRowKeys });
        } else if (type === 2) {
            this.setState({ expandedRowKeys: [] });
        }
    }
    render() {
        const sp = <span>0/15</span>;
        const sonSp = <span>0/15</span>;
        const { value, expandedRowKeys, visibily, dataSource, isDrab } = this.state;
        const { getFieldDecorator } = this.props.form;
        const columns = [
            { title: '专题名称', dataIndex: 'name', key: 'name' },
            { title: '更新时间', dataIndex: 'age', key: 'age' },
            {
                title: '操作', dataIndex: 'address', key: 'address',
                render: () => <p className='action vertical_j'>
                    <span>查看</span>
                    <span>编辑</span>
                    <span>删除</span>
                </p>
            }
        ];

        return (
            <div className='grounding'>
                <div className="navtop bg_fff m20 p20" >
                   
                        <div className='left' >
                            资源分类
                        </div>
                   
                    <div className="center">
                            <span>啊哈哈哈</span> <span>资源啊哈哈哈分类</span> <span>资源啊哈哈哈分类</span> <span>啊哈哈哈</span> <span>啊哈哈哈</span> <span>啊哈哈哈</span> <span>啊哈哈哈</span> <span>啊哈哈哈</span> <span>资啊哈哈哈源分类</span> <span>啊哈哈哈</span> <span>资啊哈哈哈源分类</span>  <span>啊哈哈哈</span> <span>资啊哈哈哈源分类</span>  <span>啊哈哈哈</span> <span>资啊哈哈哈源分类</span>  <span>啊哈哈哈</span> <span>啊哈哈哈</span> <span>啊哈哈哈</span> <span>啊哈哈哈</span>

                     </div>
                    <div className='right'>
                        <Button type='primary' className='search'>查询</Button>
                        <Button className='reset_btn'>重置</Button>
                        <span>展开 ★</span>
                    </div>
                </div>
                <div className='special_box bg_fff p20'>

                    <div className="top" style={{ display: isDrab ? 'none' : 'flex' }}>
                        <Col span={12}>
                            <Button className='sure_sort' type='primary' onClick={this.add}>上传资源</Button>

                        </Col>
                        <Col className='top_r' span={12}>
                            <Input placeholder='请输入资源名称/上传人' />

                        </Col>
                    </div>


                    <div className="special_container">
                        <DndProvider backend={HTML5Backend}>
                            <MyTable
                                isDrab={true}
                                options={
                                    {
                                        columns,
                                        dataSource,
                                        isDrab: true,
                                        // onRow: (record, index) => ({
                                        //     index,
                                        //     moveRow: this.moveRow,
                                        // }),
                                        // expandIcon: ({ expanded, onExpand, record }) =>
                                        //     expanded ? (
                                        //         <span className='pointer' onClick={() => this.open(record)}>↑</span>
                                        //     ) : (
                                        //             <span className='pointer' onClick={() => this.open(record)}>↓</span>
                                        //         ),
                                        expandedRowKeys: expandedRowKeys,
                                        // expandedRowRender: record => (
                                        //     <p style={{ margin: 0 }}>{record.description}</p>
                                        // )
                                    }
                                }
                            />
                        </DndProvider>
                    </div>
                    <Modal
                        title='新建专题'
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
                                        <span><span className='red'>*</span>专题名称</span>
                                    </Col>
                                    <Col span={15}>
                                        {
                                            getFieldDecorator('name', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '请输入专题名称'
                                                    }
                                                ]
                                            })(<Input placeholder='请输入专题名称' suffix={sp} />)
                                        }
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row>
                                    <Col span={5}>
                                        <span><span className='red'>*</span>子专题名称</span>
                                    </Col>
                                    <Col span={15}>
                                        {
                                            getFieldDecorator('sonName', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '请输入子专题名称'
                                                    }
                                                ]
                                            })(<Input placeholder='请输入子专题名称' suffix={sonSp} />)
                                        }
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        )
    }
}


Special = connect(mapStateToProps, mapDispatchToProps)(Special);
Special = Form.create()(Special)
export default Special;
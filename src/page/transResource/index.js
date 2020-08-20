import React, { Component } from 'react';
import './index.scss';
import { Col, Button } from 'antd';

import { connect } from 'react-redux';
import listObj from '../../store/OBS/transResource/action';

const mapStateToProps = ({ TRANSRESOURCE: { options } }) => {
    return {
        options
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        btnClick(data) {
            console.log(data);
            dispatch(listObj[data]({ a: 1 }))
        }
    };
}

class index extends Component {
    back = () => {
        this.props.history.goBack()
    }
    componentDidMount(){
        console.log(this)
    }
    render() {
        let { type } = this.props.match.params;
        let part = this.props.options[type];
        console.log(part)
        return (
            <div className='trans_box'>
                <div className="header bg_fff">
                    <div className="back">
                        🐕返回
                        </div>
                    <div className='title'>
                        <h2>数据库技术及应用管理</h2>
                    </div>
                </div>
                <div className="show_box">
                    <div className="left">
                        <div className="watch">

                        </div>
                        <div className="watch_bottom bg_fff">
                            <Col span={15}>
                                <span>
                                    🐖
                            </span>
                                <span>
                                    上传人所属机构：上传人姓名 丨 2020-07-31 12:34 更新
                            </span>
                            </Col>
                            <Col className='end' span={9}>
                                <span style={{ marginRight: '45px' }}>
                                    <b>🐕</b>
                                    <span>浏览量：4526</span>
                                </span>
                                <span>
                                    <b>🐕</b>
                                    <span>收藏量：9087</span>
                                </span>
                            </Col>
                        </div>
                    </div>
                    <div className="right bg_fff">
                        <div className="title">
                            <h2>数据库技术及应用管理</h2>
                            <span>国际货运代理实务</span>
                        </div>
                    </div>
                </div>
                <div className="action_bttom bg_fff">
                    <div className='action'>
                        {
                            part.btnArr && part.btnArr.map((v, i) => <Button onClick={() => this.props.btnClick(part.btnFn[i])} type='primary' key={i} className='ant_blue'>{v}</Button>)
                        }
                        <Button className='blue' onClick={this.back}>返回</Button>
                    </div>
                </div>
            </div>
        )
    }
}
index = connect(mapStateToProps, mapDispatchToProps)(index);
export default index;
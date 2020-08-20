import React, { Component } from 'react';
import './index.scss';
import { Col } from 'antd';


export default class ResourceDetail extends Component {
    render() {
        return (
            <div className='resource_detail_box'>
                <div className="header bg_fff">
                    <div className="back">
                        🐕返回
                        </div>
                    <div className='title'>
                        <h2>数据库技术及应用管理</h2>
                    </div>
                </div>
                <div className="show_box">
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
                        <Col span={9}>
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
                    <div className="content bg_fff">
                        <p>
                            <span>资源名称：</span>
                            <span>北京召开疫情防控第110场例行新闻发布会</span>
                        </p>
                        <p>
                            <span>作者：</span>
                            <span>张老师</span>
                        </p>
                        <p>
                            <span>资源分类：</span>
                            <span>中秋特辑</span>
                        </p>
                        <p>
                            <span>适用对象：</span>
                            <span>高职</span>
                        </p>
                        <p>
                            <span>摘要：</span>
                            <span>现在这场疫情危机给整个世界都带来了非常沉重的影响</span>
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}

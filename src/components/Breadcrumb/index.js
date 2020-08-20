import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import KindName from 'classnames';

let style = {
    color: '#333333',
    fontSize: '20px',
    marginTop: '15px',
    fontWeight: 'bold'
}

export default class OBreadcrumb extends Component {
    jump = (path) => {
        if (path === this.props.location.pathname) {
            return;
        }
        this.props.history.push(path);
    }
    render() {

        const { list=[] } = this.props;
        return (
            <div style={{ padding: '20px 30px 10px 30px' }}>
                <Breadcrumb separator=">" >
                    {
                        list.length && list.map((v, i) => {
                            if (v) {
                                return <Breadcrumb.Item key={i} className={v.path ? 'pointer' : 'default'} onClick={() => this.jump(v.path)}>
                                    {v.title}
                                </Breadcrumb.Item>
                            }
                        })
                    }
                </Breadcrumb>
            </div>
        )
    }
}
import React, { Component } from 'react'
import {  Breadcrumb, Card } from 'antd';
class OBreadcrumb extends Component {
    render() {
        return (
            <Card   style={{
                margin: '10px 16px 0 16px',
                background: '#fff',
            }}>
                <Breadcrumb >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
            </Card>
        )
    }
}
export default OBreadcrumb
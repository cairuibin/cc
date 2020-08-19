import React, { Component } from 'react'
import { Breadcrumb, Card } from 'antd';
import routerList from '@/router/router_config.js';





class OBreadcrumb extends Component {
    componentDidMount() {
    }
    getCrm = () => {
        this.setState({})
    }
    render() {
        let path = this.props.location.pathname;
        let one = routerList.filter(e => e.component).find(v => path.includes(v.path)).children.find(j => path.includes(j.path));
        let two = one.children.find(v => v.path === path);
        let arr = [one, two]
        return (
            <Card style={{
                margin: '10px 16px 0 16px',
                background: '#fff',
            }}>
                <Breadcrumb >
                    {
                        arr.length && arr.map(v => {
                            if (v) {
                                return <Breadcrumb.Item className='pointer' key={v.path} onClick={() => this.props.history.push(v.path)}>{v.name}</Breadcrumb.Item>
                            }
                        })
                    }
                </Breadcrumb>
            </Card>
        )
    }
}
export default OBreadcrumb
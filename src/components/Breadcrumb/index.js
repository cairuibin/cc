import React, { Component } from 'react'
import { Breadcrumb, Card } from 'antd';
import routerList from '@/router/router_config.js';

let style = {
    color: '#333333',
    fontSize: '20px',
    marginTop: '15px',
    fontWeight:'bold'
}



class OBreadcrumb extends Component {
    componentDidMount() {
    }
    getCrm = () => {
        this.setState({})
    }
    jump = (path) => {
        if (path === this.props.location.pathname) {
            return;
        }
        this.props.history.push(path);
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
                                return <Breadcrumb.Item className='pointer' onClick={() => this.jump(v.path)}>{v.name}</Breadcrumb.Item>
                            }
                        })
                    }
                </Breadcrumb>
                {
                    arr[1] && <h2 style={style}>{arr[1].name}</h2>
                }
            </Card>
        )
    }
}
export default OBreadcrumb
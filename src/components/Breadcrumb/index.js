import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import routerList from '@/router/router_config.js';
import { connect } from 'react-redux';
import KindName from 'classnames';

let style = {
    color: '#333333',
    fontSize: '20px',
    marginTop: '15px',
    fontWeight: 'bold'
}

const mapStateToProps = ({ RESOURCE }) => {
    const { menuList } = RESOURCE;
    return {
        menuList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

class OBreadcrumb extends Component {
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
        let { menuList } = this.props;
        let one = routerList.filter(e => e.component).find(v => path.includes(v.path)).children.find(j => path.includes(j.path));
        let two, three;
        menuList.forEach(v => {
            v.children && v.children.forEach(k => {
                if (k.path === path) {
                    two = v;
                    three = k;
                }
            })
        })
        let arr = [one, two, three];
        return (
            <div style={{ padding: '20px 30px 10px 30px' }}>
                <Breadcrumb separator=">" >
                    {
                        arr.length && arr.map((v, i) => {
                            if (v) {
                                return <Breadcrumb.Item key={i} className={v.path ? 'pointer' : 'default'} onClick={() => this.jump(v.path)}>
                                    {v.title ? v.title : v.name}
                                </Breadcrumb.Item>
                            }
                        })
                    }
                </Breadcrumb>
            </div>
        )
    }
}
export default connect(mapStateToProps.mapDispatchToProps)(OBreadcrumb)
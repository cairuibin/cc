import React from 'react'
import { connect } from 'react-redux'
import { SET_COLLAPSED_FN } from '../../store/OBS/home/action'
import { Layout, Menu, Icon } from 'antd';
import RouterView from '../../router/router_view'
import OBreadcrumb from '../../components/Breadcrumb'
import './index.less'
import { Redirect } from 'react-router-dom';
import SiderLogo from '../../components/SiderLogo'
import OHeader from '../../components/Header'
const { Sider, Content } = Layout;

class Home extends React.Component {
    render() {
        return (<>
            {
                localStorage.getItem('auth') ? <Layout style={{ height: "100%" }}>
                    <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                        <SiderLogo></SiderLogo>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" onClick={()=>this.props.history.push('/home/eg')}>
                                <Icon type="user" />
                                <span>菜单一</span>
                            </Menu.Item>
                            <Menu.Item key="2" onClick={()=>this.props.history.push('/home/eg2')}>
                                <Icon type="video-camera" />
                                <span>菜单二</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>菜单三</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <OHeader />
                        <OBreadcrumb />
                        <Content style={{ margin: '10px 16px', padding: 24, background: '#fff', minHeight: 280, }}>
                            <RouterView routers={this.props.routers}></RouterView>
                        </Content>
                    </Layout>
                </Layout> : <Redirect to='/login' />
            }
        </>)
    }
}


const mapStateToProps = ({ HOME }) => {
    return {
        collapsed: HOME.collapsed,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (value) => {
            dispatch(SET_COLLAPSED_FN(value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
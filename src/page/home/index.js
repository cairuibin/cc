import React from 'react'
import { connect } from 'react-redux'
import { SET_COLLAPSED_FN } from '../../store/OBS/home/action'
import { Layout, Menu, Icon, Card } from 'antd';
import RouterView from '../../router/router_view'
import OBreadcrumb from '../../components/Breadcrumb'
import './index.less'
import { Redirect } from 'react-router-dom';
import SiderLogo from '../../components/SiderLogo';

const { Header, Sider, Content } = Layout;
class Home extends React.Component {
    render() {
        return (<>
            {
                localStorage.getItem('auth') ? <Layout style={{ height: "100%" }}>
                    <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                        <SiderLogo></SiderLogo>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.props.change}
                            />
                        </Header>
                        <OBreadcrumb></OBreadcrumb>
                        <Content
                            style={{
                                margin: '10px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280,
                            }}
                        >


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
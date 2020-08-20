
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA } from '@store/OBS/resource/action'
import { Layout, Menu, Icon } from 'antd';
import OBreadcrumb from '../../components/Breadcrumb'
import './index.scss'
import { Redirect } from 'react-router-dom';
import RouterView from '../../router/router_view';
const { SubMenu } = Menu;
const { Sider, Content } = Layout;

const mapStateToProps = ({ RESOURCE }) => {
    const {menuList} = RESOURCE;
    return {
        menuList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}




export default connect(mapStateToProps, mapDispatchToProps)(class Resource extends React.Component {
    jump = (path) => {
        if (path === this.props.location.pathname) {
            return;
        }
        // this.crumb.getCrm();
        this.props.history.push(path);
    }
    render() {
        const {menuList} = this.props;
        return (
            localStorage.getItem('userInfo') ? <Layout className='resource_box'>
                <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                    {/* <SiderLogo></SiderLogo> */}
                    <Menu theme="dark" mode="inline" openKeys={['sub1', 'sub2', 'sub3']}>
                        {
                            menuList.map((v => {
                                return <SubMenu key={v.key} title={v.title} >
                                    {
                                        v.children && v.children.map(k => {
                                            return <Menu.Item onClick={() => this.jump(k.path)} key={k.key}>
                                                {k.title}
                                            </Menu.Item>
                                        })
                                    }
                                </SubMenu>
                            }))
                        }
                    </Menu>
                </Sider>
                <Layout>
                    {/* <OHeader /> */}
                    <OBreadcrumb ref={e => this.crumb = e} {...this.props} />
                    <Content style={{ margin: '10px 16px',   minHeight: 280, }}>
                        <RouterView routers={this.props.routers}></RouterView>
                    </Content>
                </Layout>
            </Layout> : <Redirect to='/login' />
        )
    }
})

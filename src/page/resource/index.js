
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA } from '@store/OBS/resource/action'
import { Layout, Menu, Icon } from 'antd';
import OBreadcrumb from '../../components/Breadcrumb'
import './index.scss'
import { Redirect } from 'react-router-dom';
import RouterView from '../../router/router_view';
import routerList from '@/router/router_config.js';
const { SubMenu } = Menu;
const { Sider, Content } = Layout;

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




export default connect(mapStateToProps, mapDispatchToProps)(class Resource extends React.Component {
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
        let arr = [{ ...one, title: one.name }, two, three];
        return (
            localStorage.getItem('userInfo') ? <Layout className='resource_box'>
                <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                    {/* <SiderLogo></SiderLogo> */}
                    <Menu  mode="inline" openKeys={['sub1', 'sub2', 'sub3']}>
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
                    <OBreadcrumb list={arr} ref={e => this.crumb = e} {...this.props} />
                    <Content style={{ margin: '10px 16px', minHeight: 280, }}>
                        <RouterView routers={this.props.routers}></RouterView>
                    </Content>
                </Layout>
            </Layout> : <Redirect to='/login' />
        )
    }
})


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
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const menuList = [
    {
        parentTitle: '资源属性管理',
        key: 'sub1',
        children: [
            {
                title: '专题管理',
                key: '0',
                path: '/main/resource/special'
            },
            {
                title: '资源标签管理',
                key: '1',
                path: '/main/resource/label'
            }
        ]
    },
    {
        parentTitle: '资源管理',
        key: 'sub2',
        children: [
            {
                title: '审核设置',
                key: '3',
                path: '/main/resource/audit'
            }

        ]
    },
    {
        parentTitle: '资源管理',
        key: 'sub3',
        children: [
            {
                title: '上架管理',
                key: '4',
                path: '/main/resource/grounding'
            },
            {
                title: '下架管理',
                key: '5',
                path: '/main/resource/undercarriage'
            },
            {
                title: '举报管理',
                key: '6',
                path: '/main/resource/report'
            },
            {
                title: '审核管理',
                key: '7',
                path: '/main/resource/check'
            },
            {
                title: '上传管理',
                key: '8',
                path: '/main/resource/uploading'
            },
            {
                title: '推荐管理',
                key: '9',
                path: '/main/resource/recommend'
            },
            {
                title: '临时专题管理',
                key: '10',
                path: '/main/resource/temporaryProject'
            },
            {
                title: '临时分类管理',
                key: '11',
                path: '/main/resource/temporaryClassify'
            },

        ]
    }
]


export default connect(mapStateToProps, mapDispatchToProps)(class Resource extends React.Component {
    jump = (path) => {
        this.crumb.getCrm();
        this.props.history.push(path);
    }
    render() {
        return (
            localStorage.getItem('userInfo') ? <Layout className='resource_box'>
                <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                    {/* <SiderLogo></SiderLogo> */}
                    <Menu theme="dark" mode="inline" openKeys={['sub1', 'sub2', 'sub3']}>
                        {
                            menuList.map((v => {
                                return <SubMenu key={v.key} title={v.parentTitle}>
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
                    <Content style={{ margin: '10px 16px', padding: 24, background: '#fff', minHeight: 280, }}>
                        <RouterView routers={this.props.routers}></RouterView>
                    </Content>
                </Layout>
            </Layout> : <Redirect to='/login' />
        )
    }
})

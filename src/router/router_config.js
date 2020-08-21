
import LoadableComponent from '../until/LoadableComponent'
let moduleFile = require.context('../page', true, /\index.js$/);
let result = moduleFile.keys().reduce((prev, item) => {
    let str = item.split('/')[item.split('/').length - 2];
    let name = str[0].toLocaleUpperCase() + str.slice(1);
    let aa = moduleFile(item).default;
    prev = Object.assign({}, prev, { [name]: LoadableComponent(import('../page' + item.slice(1))) })
    // prev = Object.assign({}, prev, { [name]: aa })
    return prev
}, {});
export default [
    {
        name: "首页",
        path: "/",
        redirect: '/main/resource',
    },
    {
        name: "首页",
        path: "/main",
        component: result.Main,
        children: [
            {
                name: "资源",
                path: "/main/resource",
                component: result.Resource,
                children: [
                    {
                        name: '专题管理',
                        path: '/main/resource/special',
                        component: result.Special
                    },
                    {
                        name: '资源标签管理',
                        path: '/main/resource/label',
                        component: result.Label
                    },
                    {
                        name: '审核设置',
                        path: '/main/resource/audit',
                        component: result.Audit
                    },
                    {
                        name: '上架管理',
                        path: '/main/resource/grounding',
                        component: result.Grounding
                    },
                    {
                        name: '下架管理',
                        path: '/main/resource/undercarriage',
                        component: result.Undercarriage
                    },
                    {
                        name: '举报管理',
                        path: '/main/resource/report',
                        component: result.Report
                    },
                    {
                        name: '审核管理',
                        path: '/main/resource/check',
                        component: result.Check
                    },
                    {
                        name: '上传管理',
                        path: '/main/resource/uploading',
                        component: result.Uploading
                    },
                    {
                        name: '推荐管理',
                        path: '/main/resource/recommend',
                        component: result.Recommend
                    },
                    {
                        name: '临时专题管理',
                        path: '/main/resource/temporaryProject',
                        component: result.TemporaryProject
                    },
                    {
                        name: '临时分类管理',
                        path: '/main/resource/temporaryClassify',
                        component: result.TemporaryClassify
                    },
                ]

            },
            {
                name: 'sanshi',
                path: '/main/sanshi',
                component: result.Sanshi
            }
        ]
    },
    {
        name: "登录",
        path: "/login",
        component: result.Login,
        exact: true
    },
    {
        name: "404",
        path: "/404",
        component: result.Notfound,
    },
    {
        name: '资源详情',
        path: '/resourceDetail',
        component: result.ResourceDetail
    },
    {
        name:'资源浏览通用',
        path:'/transResource/:type',
        component: result.TransResource
    }
];


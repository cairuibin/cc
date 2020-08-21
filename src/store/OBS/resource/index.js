
import reducers from './reducers'
let defaultState = {
    collapsed: false,
    menuList: [
        {
            title: '资源属性管理',
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
            title: '资源管理',
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
            title: '资源管理',
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
}
const Resource = (state = defaultState, action) => {
    let Newstate = JSON.parse(JSON.stringify(state))
    reducers[action.type] && reducers[action.type](Newstate, action)
    return Newstate
}

export default Resource

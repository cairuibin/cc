
import LoadableComponent from '../until/LoadableComponent'
let moduleFile = require.context('../page', true, /\index.js$/);
let result = moduleFile.keys().reduce((prev, item) => {
    let str = item.split('/')[item.split('/').length - 2];
    let name = str[0].toLocaleUpperCase() + str.slice(1);
    prev = Object.assign({}, prev, { [name]: LoadableComponent(import('../page' + item.slice(1))) })
    return prev
}, {});
console.log(result)
export default [
    {
        name: "首页",
        path: "/",
        redirect: '/home',
    },
    {
        name: "首页",
        path: "/home",
        component: result.Home,
        children: [{
            name: "第二个",
            path: "/home",
            redirect: '/home/eg',

        }, {
            name: "第二个",
            path: "/home/eg",
            component: result.Eg,

        }, {
            name: "第二个",
            path: "/home/eg2",
            component: result.Eg2,

        }]
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
    }
];


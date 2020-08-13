
import LoadableComponent from '../until/LoadableComponent'
const EG = LoadableComponent(import('../page/eg'))
const EG2 = LoadableComponent(import('../page/eg2/index2'))
const Home = LoadableComponent(import('../page/home'))
const Login = LoadableComponent(import('../page/login'))
const NotFonnd = LoadableComponent(import('../page/notfound'))
export default [

    {
        name: "首页",
        path: "/",
        redirect: '/home',
    },
    {
        name: "首页",
        path: "/home",
        component: Home,

        children: [{
            name: "第二个",
            path: "/home",
            redirect: '/home/eg',

        }, {
            name: "第二个",
            path: "/home/eg",
            component: EG,

        }, {
            name: "第二个",
            path: "/home/eg2",
            component: EG2,

        }]
    },
    {
        name: "登录",
        path: "/login",
        component: Login,
        exact: true
    },
    {
        name: "404",
        path: "/404",
        component: NotFonnd,
    }
];


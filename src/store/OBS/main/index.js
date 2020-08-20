
import reducers from './reducers'
let defaultState = {
    activeKey: sessionStorage.getItem('header_menu_key') ? sessionStorage.getItem('header_menu_key') : '0',
    headerMenuList: [{
        path: "/main/resource",
        key: "0",
        name: "资源"
    }, {
        path: "/main/sanshi",
        key: "1",
        name: "直播"
    }]
}
const Main = (state = defaultState, action) => {
    let Newstate = JSON.parse(JSON.stringify(state))
    reducers[action.type] && reducers[action.type](Newstate, action)
    return Newstate
}

export default Main

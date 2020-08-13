
import reducers from './reducers'
let defaultState = {
    arr: '同步初始状态值',
    asyncArr:[]
}
const reducer = (state = defaultState, action) => {
    let Newstate = JSON.parse(JSON.stringify(state))
    reducers[action.type] && reducers[action.type](Newstate, action)
    return Newstate
}

export default reducer
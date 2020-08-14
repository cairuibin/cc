
import reducers from './reducers'
let defaultState = {
    userFlag: true,
    uname:"",
    pwd:""

}
const homeReducer = (state = defaultState, action) => {
    let Newstate = JSON.parse(JSON.stringify(state))
    reducers[action.type] && reducers[action.type](Newstate, action)
    return Newstate
}

export default homeReducer
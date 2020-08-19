
import reducers from './reducers'
let defaultState = {
    collapsed: false,

}
const Grounding = (state = defaultState, action) => {
    let Newstate = JSON.parse(JSON.stringify(state))
    reducers[action.type] && reducers[action.type](Newstate, action)
    return Newstate
}

export default Grounding
    
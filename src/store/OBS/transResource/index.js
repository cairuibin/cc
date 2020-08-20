
import reducers from './reducers'
let defaultState = {
    options: {
        temporaryProject: {
            btnArr: ['设置专题'],
            btnFn: ['BBB']
        },
        recommend:{
            btnArr: ['推荐'],
            btnFn: ['CCC']
        }
    }
}
const homeReducer = (state = defaultState, action) => {
    let Newstate = JSON.parse(JSON.stringify(state))
    reducers[action.type] && reducers[action.type](Newstate, action)
    return Newstate
}

export default homeReducer
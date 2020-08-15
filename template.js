function temFn(comName) {
return `
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/${comName.toLowerCase()}/action'
import { Button } from 'antd';


const mapStateToProps = ({${comName.toUpperCase()}}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class ${comName} extends React.Component {
    render() {
        return (
            <div>   
                ${comName}
            </div>
        )
    }
})
`
}

function reducerTem(comName = 'Index') {
    return `
import reducers from './reducers'
let defaultState = {
    collapsed: false,

}
const ${comName} = (state = defaultState, action) => {
    let Newstate = JSON.parse(JSON.stringify(state))
    reducers[action.type] && reducers[action.type](Newstate, action)
    return Newstate
}

export default ${comName}
    `
}

function actionTem() {
    return `
export default {
    AAA(state,action) {
                    
    }
}`
}

module.exports = {
    temFn,
    reducerTem,
    actionTem
}
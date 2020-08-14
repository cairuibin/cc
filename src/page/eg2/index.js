import React, { Component } from 'react'
import { connect } from 'react-redux'
import { B } from '../../store/OBS/eg/action'
import { login } from '../../api/eg/index'
class EG extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.changeAsyncArr()
                }} >
                    异步改变

                </button>
                <div>
                    {this.props.asyncArr.map(v => {
                        return <div key={v}>{v}</div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ EG }) => {

    return {

        asyncArr: EG.asyncArr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAsyncArr: async (value) => {
            let data = await login()

            dispatch(B([data]));

        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EG);
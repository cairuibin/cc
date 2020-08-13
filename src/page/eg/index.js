import React, { Component } from 'react'
import { connect } from 'react-redux'
import { A } from '../../store/OBS/eg/action'
class EG extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.changeArr('好爱好爱你')
                }} >
                    {this.props.arr}

                </button>
            </div>
        )
    }
}

const mapStateToProps = ({ EG }) => {
    return {
        arr: EG.arr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeArr: (value) => {
            dispatch(A(value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EG);
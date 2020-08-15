import React, { Component } from 'react'
import { connect } from 'react-redux'
import { A } from '../../store/OBS/eg/action'
import OTable from '../../components/Table'
import './index.scss';
class EG extends Component {
    render() {
        return (
            <div>
                {/* <button onClick={() => {
                    this.props.changeArr('好爱好爱你')
                }} >
                    {this.props.arr}

                </button> */}
                <h2>
                    <span>123</span>
                </h2>
                <OTable />
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
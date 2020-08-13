import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { SET_ISUSERLOGIN_FN } from '../../store/OBS/home/action'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div>
                <Button type='primary' onClick={
                    () => {
                        this.props.history.push('/home')
                        localStorage.setItem('auth',11111)
                        // this.props.setUserLogin()

                    }
                }>登录</Button>
                
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
        // setUserLogin: (value) => {
        //     dispatch(SET_ISUSERLOGIN_FN(value));
        // }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
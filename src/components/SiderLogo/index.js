import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.less'
class SiderLogo extends Component {
    render() {
        return (
            <div className='SiderLogo'>
                {
                    this.props.collapsed ?
                        <img className='pic' src={require("../../assets/img/logo-im1.png")} alt='' /> :
                        <img className='pic1' src={require("../../assets/img/logo.png")} alt='' />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ HOME }) => {
    return {
        collapsed: HOME.collapsed,

    }
}

const mapDispatchToProps = () => {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SiderLogo)
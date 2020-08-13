import React, { Component } from 'react'
import { Layout,Icon } from 'antd';
import {connect} from 'react-redux'
import {SET_COLLAPSED_FN} from '../../store/OBS/home/action'
const {Header}=Layout
class OHeader extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.change}
                />
            </Header>
        )
    }
}

const mapStateToProps = ({ HOME }) => {
    return {
        collapsed: HOME.collapsed,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (value) => {
            dispatch(SET_COLLAPSED_FN(value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OHeader);
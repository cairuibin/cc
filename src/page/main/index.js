
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA } from '@store/OBS/main/action'
import { Button } from 'antd';
import RouterView from '../../router/router_view';


const mapStateToProps = ({ MAIN }) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(class Main extends React.Component {

    render() {
        return (
            <div className='main_container'>
                <div className='header_menu'>
                    <div onClick={() => this.props.history.push('/main/resource')}>资源</div>
                    <div onClick={() => this.props.history.push('/main/sanshi')}>三十</div>
                </div>
                <div className='container'>
                    <RouterView routers={this.props.routers} />
                </div>
            </div>
        )
    }
})

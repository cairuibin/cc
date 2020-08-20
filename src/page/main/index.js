
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { changeIndex } from '@store/OBS/main/action'
import { Button } from 'antd';
import RouterView from '../../router/router_view';
import KindName from 'classnames';


const mapStateToProps = ({ MAIN }) => {
    const { activeKey } = MAIN;
    return {
        activeKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeIndex(data) {
            dispatch(changeIndex(data));
        }
    };
}

const arr = [{
    path: "/main/resource",
    key: "0",
    name: "资源"
}, {
    path: "/main/sanshi",
    key: "1",
    name: "直播"
}]
export default connect(mapStateToProps, mapDispatchToProps)(class Main extends React.Component {
    change = (item) => {
        this.props.changeIndex(item.key);
        this.props.history.push(item.path);
    }
    render() {
        const { activeKey } = this.props;
        return (
            <div className='main_container'>
                <div className='header_menu'>

                    <img style={{ width: "149px", height: "50px", display: "block" }} src={require('../../assets/img/logo.png')} alt="" />
                    {arr.map((v, i) => {
                        return <div key={i} className={KindName({ 'active': v.key === activeKey })} onClick={() => this.change(v)}>{v.name}</div>
                    })}

                    {/* <div onClick={() => this.props.history.push('/main/sanshi')}>三十</div> */}
                </div>
                <div className='container'>
                    <RouterView routers={this.props.routers} />
                </div>
            </div>
        )
    }
})

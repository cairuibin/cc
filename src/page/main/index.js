
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

const arr=[{
    path:"/main/resource",
    key:"0",
    name:"资源"
},{
    path:"/main/sanshi",
    key:"0",
    name:"直播"
}]
export default connect(mapStateToProps, mapDispatchToProps)(class Main extends React.Component {

    render() {
        return (
            <div className='main_container'>
                <div className='header_menu'>
    
                    <img style={{width:"149px",height:"50px",display:"block"}} src={require('../../assets/img/logo.png')} alt=""/>
                    {arr.map((v,i)=>{
                        return  <div onClick={() => this.props.history.push(v.path)}>{v.name}</div>
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

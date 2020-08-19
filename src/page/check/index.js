
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/check/action'
import { Button } from 'antd';


const mapStateToProps = ({CHECK}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Check extends React.Component {
    render() {
        return (
            <div>   
                Check
            </div>
        )
    }
})

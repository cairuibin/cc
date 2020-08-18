
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/temporaryProject/action'
import { Button } from 'antd';


const mapStateToProps = ({TEMPORARYPROJECT}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class TemporaryProject extends React.Component {
    render() {
        return (
            <div>   
                TemporaryProject
            </div>
        )
    }
})

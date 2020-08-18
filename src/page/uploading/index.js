
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/uploading/action'
import { Button } from 'antd';


const mapStateToProps = ({UPLOADING}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Uploading extends React.Component {
    render() {
        return (
            <div>   
                Uploading
            </div>
        )
    }
})

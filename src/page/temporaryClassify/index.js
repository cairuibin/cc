
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/temporaryClassify/action'
import { Button } from 'antd';


const mapStateToProps = ({TEMPORARYCLASSIFY}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class TemporaryClassify extends React.Component {
    render() {
        return (
            <div>   
                TemporaryClassify
            </div>
        )
    }
})

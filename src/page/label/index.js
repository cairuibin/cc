
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/label/action'
import { Button } from 'antd';


const mapStateToProps = ({LABEL}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Label extends React.Component {
    render() {
        return (
            <div>   
                Label
            </div>
        )
    }
})

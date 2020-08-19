
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/undercarriage/action'
import { Button } from 'antd';


const mapStateToProps = ({UNDERCARRIAGE}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Undercarriage extends React.Component {
    render() {
        return (
            <div>   
                Undercarriage
            </div>
        )
    }
})

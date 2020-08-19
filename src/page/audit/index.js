
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/audit/action'
import { Button } from 'antd';


const mapStateToProps = ({AUDIT}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Audit extends React.Component {
    render() {
        return (
            <div>   
                Audit
            </div>
        )
    }
})

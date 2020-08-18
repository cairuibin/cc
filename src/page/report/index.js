
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/report/action'
import { Button } from 'antd';


const mapStateToProps = ({REPORT}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Report extends React.Component {
    render() {
        return (
            <div>   
                Report
            </div>
        )
    }
})

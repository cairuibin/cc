
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/grounding/action'
import { Button } from 'antd';


const mapStateToProps = ({GROUNDING}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Grounding extends React.Component {
    render() {
        return (
            <div>   
                Grounding
            </div>
        )
    }
})

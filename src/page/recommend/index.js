
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/recommend/action'
import { Button } from 'antd';


const mapStateToProps = ({RECOMMEND}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Recommend extends React.Component {
    render() {
        return (
            <div>   
                Recommend
            </div>
        )
    }
})

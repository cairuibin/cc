
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/sanshi/action'
import { Button } from 'antd';


const mapStateToProps = ({SANSHI}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Sanshi extends React.Component {
    render() {
        return (
            <div>   
                Sanshi
            </div>
        )
    }
})

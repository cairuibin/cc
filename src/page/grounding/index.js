
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/grounding/action'
import { Card } from 'antd';


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
            <>   
               <Card>
                  11
               </Card>
            </>
        )
    }
})

import React, { Component } from 'react';
import '../assets/styles/PastMedicalHistoryHeader.scss';

class PastMedicalHistoryHeader extends Component{
    render(){
        return(
            <div className='PastMedicalHistoryHeader'>
                <h3 className='PastMedicalHistoryHeader__Heading'>{this.props.title}</h3>
                {this.props.children}
            </div>
        );
    }
}

export default PastMedicalHistoryHeader;
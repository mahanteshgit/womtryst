import React, { Component } from 'react';
import '../assets/styles/PatientHistoryHeader.scss';

class PatientHistoryHeader extends Component{
    render(){
        return(
            <div className='PatientHistoryHeader'>
               <h3 className= 'PatientHistoryHeader__heading'>{this.props.title}</h3>
               
               {this.props.children}
            </div>
        );
    }
}

export default PatientHistoryHeader;
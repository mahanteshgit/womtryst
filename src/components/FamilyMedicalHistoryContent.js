import React, { Component } from 'react';
import '../assets/styles/FamilyMedicalHistoryContent.scss';

class FamilyMedicalHistoryContent extends Component{
    render(){
        return(
            <div className='FamilyMedicalHistoryContent'>
                <div className='FamilyMedicalHistoryContent__Info'>
                    <p className='rhc1aa'>Medical Conditions</p>
                    <p className='rhc1ab'>{this.props.bp}</p>
                    <p className='rhc1ab'>{this.props.asthama}</p>
                    <p className='rhc1ab'>{this.props.heartProblems}</p>
                </div>
            </div>
        );
    }
}

export default FamilyMedicalHistoryContent;
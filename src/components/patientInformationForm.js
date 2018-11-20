import React, { Component } from 'react';
import '../assets/styles/patientInformationForm.scss';
import Header from '../components/Header';

class PatientInformationForm extends Component{
    render(){
        return(
           <div className='PatientInformationForm'>
                <Header />
           </div>
        );
    }
}

export default PatientInformationForm;
import React, { Component } from 'react';
import '../assets/styles/MedicalHistory1.scss';
import PastMedicalHistory from './PastMedicalHistory'; 
import MenstrualHistory from './MenstrualHistory';
import MedicalHistory2 from './MedicalHistory2';

class MedicalHistory1 extends Component{
    render(){
        return(
            <div>
                <div className='MedicalHistory1'>
                    <PastMedicalHistory />
                    <MenstrualHistory />
                </div>
                <MedicalHistory2 />
            </div>
            
        );
    }   
}

export default MedicalHistory1;
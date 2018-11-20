import React, { Component } from 'react';
import '../assets/styles/FamilyMedicalHistory.scss';
import MenstrualHistoryHeader from './MenstrualHistoryHeader';
import FamilyMedicalHistoryContent from './FamilyMedicalHistoryContent';

class FamilyMedicalHistory extends Component{
    state={
        FamilyMedicalHistoryHeader: [
            { title: 'Family Medical History'},
            { fmhHref: '#FamilyMedicalHistory'},
            { fmhTitle: 'FamilyMedicalHistory'}
        ],
        FamilyMedicalHistoryContent:[
            {
                bp: 'High Blood pressure',
                asthama: 'Asthama',
                heartProblems: 'Heart Problems'
            }
        ]
    }
    render(){
        return(
            <div className='FamilyMedicalHistory'>
                <MenstrualHistoryHeader title={this.state.FamilyMedicalHistoryHeader[0].title}>
                    <a className='FamilyMedicalHistory__HeaderLink'
                    href={this.state.FamilyMedicalHistoryHeader[1].fmhHref}
                    title={this.state.FamilyMedicalHistoryHeader[2].fmhTitle}></a>
                </MenstrualHistoryHeader>  
                <FamilyMedicalHistoryContent
                     bp={this.state.FamilyMedicalHistoryContent[0].bp}
                     asthama={this.state.FamilyMedicalHistoryContent[0].asthama}
                     heartProblems={this.state.FamilyMedicalHistoryContent[0].heartProblems}
                />  
            </div>
        );
    }
}

export default FamilyMedicalHistory;
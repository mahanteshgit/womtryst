import React, { Component } from 'react';
import '../assets/styles/ObstetricsHistory.scss';
import PatientHistoryHeader from './PatientHistoryHeader';
import MedicalHistory1 from './MedicalHistory1'; 
import ObstetricsHistoryStatus from './ObstetricsHistoryStatus';
import PastPregnancies from './PastPregnancies';

class ObstetricsHistory extends Component{
    state ={
        PatientHistoryHeader:[
            {title: 'Obstetrics History'}, 
            {pmhHref: '#ObstetricsHistory'},
            {Pmhtitle: 'ObstetricsHistoryIcon'},
            // {pmh: 'P M H'}
        ],
        ObstetricsHistoryStatus: [
            {
                status: 'Yes',
                weeks: 12,
                consultionFor: 'Abortion',
                conceptionType: 'Assisted',
                complaint: 'Breathing problem has aggravated since',
                complaint1: 'Conception high vomiting'
            }
        ],
        PastPregnancies: [
            {
                count: 3,
                PatientYear: '2012',
                outcome: 'Ectopic',
                conception: '-',
                weeks: '-',
                method: 'Right Tube',
                Puerperium: 'Surgical Removal',
                dc: '-',
                child: ''
            }
        ]
    }
    render(){
        return(
            <div>
                <div className='ObstetricsHistory'>
                    <PatientHistoryHeader  title= {this.state.PatientHistoryHeader[0].title} >
                    {/* <div className= 'ObstetricsHistory__HeaderLogo'> */}
                        <a className= 'ObstetricsHistory__HeaderLink'
                         href= {this.state.PatientHistoryHeader[1].pmhHref} 
                        title = {this.state.PatientHistoryHeader[2].Pmhtitle}>
                        </a>
                    {/* </div> */}
                    </PatientHistoryHeader> 
                    <ObstetricsHistoryStatus 
                        status={this.state.ObstetricsHistoryStatus[0].status} 
                        weeks={this.state.ObstetricsHistoryStatus[0].weeks}
                        consultionFor={this.state.ObstetricsHistoryStatus[0].consultionFor}
                        conceptionType={this.state.ObstetricsHistoryStatus[0].conceptionType}
                        complaint={this.state.ObstetricsHistoryStatus[0].complaint}
                        complaint1={this.state.ObstetricsHistoryStatus[0].complaint1}
                    />
                    <PastPregnancies 
                        count={this.state.PastPregnancies[0].count}
                        PatientYear= {this.state.PastPregnancies[0].PatientYear}
                        outcome={this.state.PastPregnancies[0].outcome} 
                        conception={this.state.PastPregnancies[0].conception}
                        weeks={this.state.PastPregnancies[0].weeks}
                        method={this.state.PastPregnancies[0].method}
                        Puerperium={this.state.PastPregnancies[0].Puerperium}
                        dc={this.state.PastPregnancies[0].dc}
                        child={this.state.PastPregnancies[0].child}
                    />
                </div>
                <MedicalHistory1 /> 
            </div>    
        );
    }
}

export default ObstetricsHistory;
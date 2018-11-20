import React, { Component } from 'react';
import '../assets/styles/PastMedicalHistory.scss';
import PastMedicalHistoryHeader from './PastMedicalHistoryHeader';
import PastMedicalHistoryContent from './PastMedicalHistoryContent';

class PastMedicalHistory extends Component{
    state = {
        PatientHistoryHeader:[
            {title: 'Past Medical History'},
            {phhHref: '#PastMedicalHistory'},
            {phhTitle: 'PastMedicalHistory'}
        ],
        PastMedicalHistoryContent: [
            {
                bp: 'High Blood Pressure',
                Asthma: 'Asthma',
                HeartProblems: 'Heart Problems',
                Ecospirin: 'Ecospirin',
                Ecospirin__date: 'Since Jul-15',
                Losar: 'Losar',
                Losar__date: 'Since Jul-15',
                Accolate: 'Accolate',
                Accolate__date: 'Since Jul-15',
                medications__Count: 4,
                HealthViva: 'Health Viva',
                HealthViva__date: 'Since Jul-15',
                Prenatal: 'Prenatal',
                Prenatal__date: 'Since Jul-15',
                vitSup__Count: 4,
                Allergies: 'Food Items',
                Allergies__Type: '( Snakgaurd )',
                Allergies__Count: 1,
                Hospitalization: 'Yes',
                Hospitalization__Status: 'Heart Problem',
                LastTTVaccination: 'Within Last 2 Years',
                LastTTVaccination__date: 'October 2014',
                Outcome: 'Positive',
                Treatment: 'Laser Therapy',
                LastTested: '3-Nov-15'
            }
        ]
    }
    render(){
        return(
            <div className='PastMedicalHistory'>
                 <PastMedicalHistoryHeader title={this.state.PatientHistoryHeader[0].title} >
                    <a className='PastMedicalHistory__Headerlink' href={this.state.PatientHistoryHeader[1].phhHref}
                    title={this.state.PatientHistoryHeader[2].phhTitle}></a>
                 </PastMedicalHistoryHeader>
                 <PastMedicalHistoryContent 
                    bp={this.state.PastMedicalHistoryContent[0].bp}
                    Asthma={this.state.PastMedicalHistoryContent[0].Asthma}
                    HeartProblems={this.state.PastMedicalHistoryContent[0].HeartProblems}
                    Ecospirin={this.state.PastMedicalHistoryContent[0].Ecospirin}
                    Ecospirin__date={this.state.PastMedicalHistoryContent[0].Ecospirin__date}
                    Losar={this.state.PastMedicalHistoryContent[0].Losar}
                    Losar__date={this.state.PastMedicalHistoryContent[0].Losar__date}
                    Accolate={this.state.PastMedicalHistoryContent[0].Accolate}
                    Accolate__date={this.state.PastMedicalHistoryContent[0].Accolate__date}
                    medications__Count={this.state.PastMedicalHistoryContent[0].medications__Count}
                    HealthViva={this.state.PastMedicalHistoryContent[0].HealthViva}
                    HealthViva__date={this.state.PastMedicalHistoryContent[0].HealthViva__date}
                    Prenatal={this.state.PastMedicalHistoryContent[0].Prenatal}
                    Prenatal__date={this.state.PastMedicalHistoryContent[0].Prenatal__date}
                    vitSup__Count={this.state.PastMedicalHistoryContent[0].vitSup__Count}
                    Allergies={this.state.PastMedicalHistoryContent[0].Allergies}
                    Allergies__Type={this.state.PastMedicalHistoryContent[0].Allergies__Type}
                    Allergies__Count={this.state.PastMedicalHistoryContent[0].Allergies__Count}
                    Hospitalization={this.state.PastMedicalHistoryContent[0].Hospitalization}
                    Hospitalization__Status={this.state.PastMedicalHistoryContent[0].Hospitalization__Status}
                    LastTTVaccination={this.state.PastMedicalHistoryContent[0].LastTTVaccination}
                    LastTTVaccination__date={this.state.PastMedicalHistoryContent[0].LastTTVaccination__date}
                    Outcome={this.state.PastMedicalHistoryContent[0].Outcome}
                    Treatment={this.state.PastMedicalHistoryContent[0].Treatment}
                    LastTested={this.state.PastMedicalHistoryContent[0].LastTested}
                 />   
                    
                    
            </div>
        );
    }
}

export default PastMedicalHistory;
import React, { Component } from 'react';
import '../assets/styles/PastMedicalHistoryContent.scss';

class PastMedicalHistoryContent extends Component{
    render(){
        return(
            <div className='PastMedicalHistoryContent'>
                <div className='PastMedicalHistoryContent__Detail'>

                    <div className='PastMedicalHistoryContent__medCond'>
                        <h5>Medical Conditions</h5>
                        <p>{this.props.bp}</p>
                        <p>{this.props.Asthma}</p>
                        <p>{this.props.HeartProblems}</p>
                    </div>

                    <div className='PastMedicalHistoryContent__medications'>
                        <h5>Medications</h5>
                        <p className='PastMedicalHistoryContent__medications--result'>
                            {this.props.Ecospirin}
                            <span className='PastMedicalHistoryContent__medications--resultStatus'>
                                {this.props.Ecospirin__date}
                            </span>
                        </p>
                        <p className='PastMedicalHistoryContent__medications--result'>
                            {this.props.Losar} 
                            <span className='PastMedicalHistoryContent__medications--resultStatus1'>
                                {this.props.Losar__date}
                            </span>
                        </p>
                        <p className='PastMedicalHistoryContent__medications--result'>
                            {this.props.Accolate} 
                            <span className='PastMedicalHistoryContent__medications--resultStatus2'>
                                {this.props.Accolate__date}
                            </span>
                        </p>

                        <p className='PastMedicalHistoryContent__medications--result'>
                            
                            <span className='PastMedicalHistoryContent__medications--resultStatus3'>
                                {this.props.medications__Count} MORE
                            </span>
                        </p>
                    </div>

                    {/* <div className='clear'></div> */}

                    <div className='PastMedicalHistoryContent__vitSup'>
                        <h5>Vittamin &amp; Supplements</h5>
                        <p className='PastMedicalHistoryContent__vitSup--result'>
                            {this.props.HealthViva}
                            <span className='PastMedicalHistoryContent__vitSup--resultStatus'>
                                {this.props.HealthViva__date}
                            </span>
                        </p>
                        <p className='PastMedicalHistoryContent__vitSup--result'>
                            {this.props.Prenatal} 
                            <span className='PastMedicalHistoryContent__vitSup--resultStatus1'>
                                {this.props.Prenatal__date}
                            </span>
                        </p>
                        <p className='PastMedicalHistoryContent__vitSup--result'>
                        
                            <span className='PastMedicalHistoryContent__vitSup--resultStatus2'>
                                {this.props.vitSup__Count} MORE
                            </span>
                        </p>
                    </div>

                    <div className='PastMedicalHistoryContent__Allergies'>
                        <h5>Allergies</h5>
                        <p>{this.props.Allergies} 
                            <span className='PastMedicalHistoryContent__Allergies--option'>
                                {this.props.Allergies__Type}
                            </span>
                        </p>
                        <p> 
                            <span className='PastMedicalHistoryContent__Allergies--count'>
                                {this.props.Allergies__Count} MORE
                            </span>
                        </p>
                    </div>
                             
                    <div className='PastMedicalHistoryContent__Hospitalization'>
                        <h5>Hospitalization
                            <span className='PastMedicalHistoryContent__Hospitalization--result'>
                                {this.props.Hospitalization}
                            </span> 
                            <span className='PastMedicalHistoryContent__Hospitalization--resultStatus'>
                                {this.props.Hospitalization__Status}
                            </span> 
                        </h5>
                    </div>

                    <div className='PastMedicalHistoryContent__lastTV'>
                        <h5 className='PastMedicalHistoryContent__lastTV--header'>
                            Last TT Vaccination 
                            <span className='PastMedicalHistoryContent__lastTV--status'> 
                                {this.props.LastTTVaccination}
                            </span>  
                            <span className='PastMedicalHistoryContent__lastTV--status'>
                                {this.props.LastTTVaccination__date}
                            </span>
                        </h5>
                    </div>

                    <div className='PastMedicalHistoryContent__papSmear'>
                        <div className='PastMedicalHistoryContent__papSmear--left'>
                            <h5>Pap Smear</h5>
                        </div>
                        <div className='PastMedicalHistoryContent__papSmear--right'>
                            <ul>
                                <li className='PastMedicalHistoryContent__papSmear--rightHeader'>Outcome</li>
                                <li className='PastMedicalHistoryContent__papSmear--rightHeader'>Treatment</li>
                                <li className='PastMedicalHistoryContent__papSmear--rightHeader'>Last Tested</li>
                            </ul>
                            <ul>
                                <li>{this.props.Outcome}</li>
                                <li>{this.props.Treatment}</li>
                                <li>{this.props.LastTested}</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default PastMedicalHistoryContent;
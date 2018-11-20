import React, { Component } from 'react';
import '../assets/styles/ObstetricsHistoryStatus.scss'

class ObstetricsHistoryStatus extends Component{
    render(){
        return(
            <div className='ObstetricsHistoryStatus'>
                <div className='ObstetricsHistoryStatus__Section1'>
                    <h3 className='ObstetricsHistoryStatus__heading'>
                        Current Pregnancy
                    </h3>
                </div>
                <div className='ObstetricsHistoryStatus__Section2'>
                    <div className='ObstetricsHistoryStatus__Section2a'>
                      
                        <div className='ObstetricsHistoryStatus__Section2a--Status'>
                            <h3 className='ObstetricsHistoryStatus__Section2a--StatusHeading'>
                                Status
                            </h3>
                            <p className='ObstetricsHistoryStatus__Section2a--StatusContent'>
                                {this.props.status}
                            </p>
                        </div>
                        <div className='ObstetricsHistoryStatus__Section2a--Weeks'>
                            <h3 className='ObstetricsHistoryStatus__Section2a--WeekHeading'>
                                Weeks
                            </h3>
                            <p className='ObstetricsHistoryStatus__Section2a--WeekContent'>
                                {this.props.weeks}
                            </p>
                        </div>
                        <div className='ObstetricsHistoryStatus__Section2a--ConsultationFor'>
                            <h3 className='ObstetricsHistoryStatus__Section2a--ConsultationHeading'>
                                Consultation For
                            </h3>
                            <p className='ObstetricsHistoryStatus__Section2a--ConsultationContent'>
                                {this.props.consultionFor}
                            </p>
                        </div>
                        <div className='ObstetricsHistoryStatus__Section2a--ConceptionType'>
                            <h3 className='ObstetricsHistoryStatus__Section2a--ConceptionTypeHeading'>
                                Conception Type
                            </h3>
                            <p className='ObstetricsHistoryStatus__Section2a--ConceptionTypeContent'>
                                {this.props.conceptionType}
                            </p>
                        </div>
                        
                    </div>

                    <div className='ObstetricsHistoryStatus__Section2b'>
                        <div className='ObstetricsHistoryStatus__Section2b--Heading'>
                            <h3 className='ObstetricsHistoryStatus__Section2b--HeadingContent'>
                                Presenting Complaint
                            </h3>
                        </div>
                        <div className='ObstetricsHistoryStatus__Section2b--Content'>
                            <p className='ObstetricsHistoryStatus__Section2b--ContentInfo'>
                               {this.props.complaint}
                            </p>
                            <p className='ObstetricsHistoryStatus__Section2b--ContentInfo'>
                                {this.props.complaint1}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ObstetricsHistoryStatus;
import React, { Component } from 'react';
import '../assets/styles/PatientDetails.scss';
import ObstetricsHistory from './ObstetricsHistory';
import profileimg from '../assets/images/profileimg.png';
import emailIcon from '../assets/images/emailIcon.png';
import callIcon from '../assets/images/callIcon.png';


class PatientDetails extends Component {
  render() {
    return (
    <div>
      <div className='patientDetails'>
          <div className='patientDetails__profile'>
              <div className='patientDetails__profileImg'>
                  <a href='#'><img className='patientDetails__patientImage' src={profileimg} alt='profile-img'/></a>
              </div>
              <span className='patientDetails__patientName'> {this.props.patientName} </span>
              <div className='patientDetails__emailDetails'>
                <img src={emailIcon} alt='emailIcon' className='patientDetails__emailIcon' />
                <span className='patientDetails__emailId'>{this.props.emailId}</span>
              </div>
              <div className='patientDetails__contactDetails'>
                <img src={callIcon} alt='callIcon' className='patientDetails__callIcon' />
                <span className='patientDetails__contactNum'>{this.props.phoneNum}</span>
              </div>
          </div>
          
          <div className='patientDetails__healthdetails'>
              <div className='patientDetails__hd1'>
                  <ul className='patientDetails__list'>
                    <li className='patientDetails__listlink'>
                        <i className="patientDetails__dob">
                            <span className='patientDetails__content'> {this.props.dob}</span>
                        </i>
                    </li>
                    <li className='patientDetails__listlink'>
                        <i className='patientDetails__nationality'>
                            <span className='patientDetails__content'>{this.props.nationality}</span>
                        </i>
                    </li>
                    <li className='patientDetails__listlink'>
                        <i className='patientDetails__graduation'>
                            <span className='patientDetails__content'>{this.props.qualification}</span>
                        </i>
                    </li>                    
                    <li className='patientDetails__listlink'>
                        <i className='patientDetails__employee'>
                            <span className='patientDetails__content'>{this.props.designation}</span>
                        </i>
                    </li>
                  </ul>
              </div>
              <div className='patientDetails__hd2'>
                <ul className='patientDetails__list'>
                        <li className='patientDetails__listlink'>
                            <i className="patientDetails__blood">
                                <span className='patientDetails__content'>{this.props.bloodGroup}</span>
                            </i>
                        </li>
                        <li className='patientDetails__listlink'>
                            <i className='patientDetails__height'>
                                <span className='patientDetails__content'>{this.props.height}</span>
                            </i>
                        </li>
                        <li className='patientDetails__listlink'>
                            <i className='patientDetails__weight'>
                                <span className='patientDetails__content'>{this.props.weight}</span>
                            </i>
                        </li>                    
                        <li className='patientDetails__listlink'>
                            <i className='patientDetails__bmi'>
                                <span className='patientDetails__content'>{this.props.bmi}<sup>2</sup></span>
                            </i>
                        </li>
                    </ul>
              </div>
              <div className='patientDetails__hd3'>
                <div className='patientDetails__locationIcon'>
                    <i className='patientDetails__location'></i>
                </div>
                <div className='patientDetails__address'>
                    <p className='patientDetails__addressSpace'>
                        {this.props.address}
                    </p>
                </div>
              </div>
          </div>
      </div>
      <ObstetricsHistory />
      </div> 
    );
  }
}
export default PatientDetails;

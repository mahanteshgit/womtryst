import React, { Component } from 'react';
import '../assets/styles/Header.scss';
import PatientDetails from './PatientDetails';
import backarrow from '../assets/images/backarrow.png';

class Header extends Component {
  state={
    PatientDetails: [
      {
        patientName: 'Sanjana Rishab',
        emailId: 'sanjana@gmail.com',
        phoneNum: 8123456785,
        dob: '12-Feb-1988',
        nationality: 'Indian',
        qualification:'Graduation & above',
        designation: 'Software Engineer',
        bloodGroup: 'B+',
        height: '165 cms (5\'5\")',
        weight: '70 kgs',
        bmi: '22.86 kg/m',
        address: '#148, thunga house, 2nd floor, Jayanagar, 7th block, Bangalore, 560078, Karnataka, India.'
      },

    ]
  }
  render() {
    return (
      <div>
          <div className="Header">
              <a href='#' title='backarrow'><img  src={backarrow} className='Header__backarrow' alt="backarrow"/></a>
              <h3 className='Header__title'>Patient Information Form</h3>
          </div>
          <PatientDetails 
            patientName={this.state.PatientDetails[0].patientName}
            emailId={this.state.PatientDetails[0].emailId}
            phoneNum={this.state.PatientDetails[0].phoneNum}
            dob={this.state.PatientDetails[0].dob}
            nationality={this.state.PatientDetails[0].nationality}
            qualification={this.state.PatientDetails[0].qualification}
            designation={this.state.PatientDetails[0].designation}
            bloodGroup={this.state.PatientDetails[0].bloodGroup}
            height={this.state.PatientDetails[0].height}
            weight={this.state.PatientDetails[0].weight}
            bmi={this.state.PatientDetails[0].bmi}
            address={this.state.PatientDetails[0].address}
            />
       </div>
    );
  }
}

export default Header;

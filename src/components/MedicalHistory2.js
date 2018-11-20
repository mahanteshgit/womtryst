import React, { Component } from 'react';
import '../assets/styles/MedicalHistory2.scss';
import RelationshipHistory from './RelationshipHistory';
import FamilyMedicalHistory from './FamilyMedicalHistory';
import LifeStyle from './LifeStyle';

class MedicalHistory2 extends Component{
    state={
        LifeStyle: [
            {
                cigarette: 'Quitted',
                date: '3-Nov-15',
                drinks: '3 Glasses',
                duration: 'Per Week',
                Injection: 'No',
                count: '',
                beverages: 'Coffee / Tea',
                quantity: '3 Cups / day',
                exercise: 'Exercise',
                timing: '20 min / day'
            }
        ]
    }
    render(){
        return(
            <div>
                <div className='MedicalHistory2'>
                    <RelationshipHistory />
                    <FamilyMedicalHistory />
                </div>
                <LifeStyle 
                    cigarette={this.state.LifeStyle[0].cigarette} 
                    date={this.state.LifeStyle[0].date}
                    drinks={this.state.LifeStyle[0].drinks}
                    duration={this.state.LifeStyle[0].duration}
                    Injection={this.state.LifeStyle[0].Injection}
                    count={this.state.LifeStyle[0].count}
                    beverages={this.state.LifeStyle[0].beverages}
                    quantity={this.state.LifeStyle[0].quantity}
                    exercise={this.state.LifeStyle[0].exercise}
                    timing={this.state.LifeStyle[0].timing}
                />
            </div>
                
        );
    }
}

export default MedicalHistory2;
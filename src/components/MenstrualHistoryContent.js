import React, { Component } from 'react';
import '../assets/styles/MenstrualHistoryContent.scss';

class MenstrualHistoryContent extends Component{
        render(){
            return(
                <div className='MenstrualHistoryContent'>
                    {/* <ul className='MenstrualHistoryContent__List'>
                        <li>Periods : Regular</li>
                        <li>Cycle Length :</li>
                        <li>Bleeding :</li>
                        <li>Clots Passed :</li>
                        <li>Pads Used :</li>
                        <li>Birth Control :</li>
                        <li>LMP:</li>
                    </ul>   */}

                    <div className='MenstrualHistoryContent__Info'>
                        <p className='MenstrualHistoryContent__Details'>Periods </p>
                        <span className='MenstrualHistoryContent__Status'>{this.props.Periods}</span>
                    </div>
                    <div className='MenstrualHistoryContent__Info'>
                        <p className='MenstrualHistoryContent__Details'>Cycle Length </p> 
                        <span className='MenstrualHistoryContent__Status'>{this.props.CycleLength}</span>
                    </div>
                    <div className='MenstrualHistoryContent__Info'>
                        <p className='MenstrualHistoryContent__Details'>Bleeding </p> 
                        <span className='MenstrualHistoryContent__Status'>{this.props.Bleeding}</span>
                    </div>
                    <div className='MenstrualHistoryContent__Info'>
                        <p className='MenstrualHistoryContent__Details'>Clots Passed </p> 
                        <span className='MenstrualHistoryContent__Status'>{this.props.ClotsPassed}</span>
                    </div>
                    <div className='MenstrualHistoryContent__Info'>
                        <p className='MenstrualHistoryContent__Details'>Pads Used </p> 
                        <span className='MenstrualHistoryContent__Status'>{this.props.PadsUsed}</span>
                    </div>
                    <div className='MenstrualHistoryContent__Info'>
                        <p className='MenstrualHistoryContent__Details'>Birth Control </p> 
                        <span className='MenstrualHistoryContent__Status'>{this.props.BirthControl}</span>
                    </div>
                    <div className='MenstrualHistoryContent__Info'>
                        <p className='MenstrualHistoryContent__Details'>LMP</p> 
                        <span className='MenstrualHistoryContent__Status'>{this.props.LMP}</span>
                    </div>
                </div>
            );
        }
}

export default MenstrualHistoryContent;
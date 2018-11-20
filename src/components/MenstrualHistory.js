import React, { Component } from 'react';
import '../assets/styles/MenstrualHistory.scss';
import MenstrualHistoryHeader from './MenstrualHistoryHeader';
import MenstrualHistoryContent from './MenstrualHistoryContent';

class MenstrualHistory extends Component{
    state={
        MenstrualHistoryHeader: [
            { title: 'Menstrual History Header' },
            { mhhHref: '#mhhHref' },
            { mhhTitle: 'MenstrualHistoryHeaderIcon'}
        ],
        MenstrualHistoryContent: [
            {
                Periods: ': Regular',
                CycleLength: ': 22 Days',
                Bleeding: ': 4 days Normal',
                ClotsPassed: ': Yes',
                PadsUsed: ': 3 per day',
                BirthControl: ': Barrier Jul\'15-Sep\'15',
                LMP: ': 14-Nov-2015'
            }
        ]


    }
    render(){
        return(
            <div className='MenstrualHistory'>
                <MenstrualHistoryHeader title={this.state.MenstrualHistoryHeader[0].title}>
                <a className='MenstrualHistory__HeaderLink' 
                href={this.state.MenstrualHistoryHeader[1].mhhHref}
                title={this.state.MenstrualHistoryHeader[2].mhhTitle}></a>
                </MenstrualHistoryHeader>
                <MenstrualHistoryContent
                    Periods={this.state.MenstrualHistoryContent[0].Periods}
                    CycleLength={this.state.MenstrualHistoryContent[0].CycleLength}
                    Bleeding={this.state.MenstrualHistoryContent[0].Bleeding}
                    ClotsPassed={this.state.MenstrualHistoryContent[0].ClotsPassed}
                    PadsUsed={this.state.MenstrualHistoryContent[0].PadsUsed}
                    BirthControl={this.state.MenstrualHistoryContent[0].BirthControl}
                    LMP={this.state.MenstrualHistoryContent[0].LMP}
                />
            </div>
        );
    }
}

export default MenstrualHistory;
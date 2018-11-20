import React, { Component } from 'react';
import '../assets/styles/RelationshipHistory.scss';
import PastMedicalHistoryHeader from './PastMedicalHistoryHeader';
import RelationshipHistoryContent from './RelationshipHistoryContent';

class RelationshipHistory extends Component{
    state={
        RelationshipHistoryHeader: [
            {title: 'Relationship History'},
            {rhhHref: '#RelationshipHistory'},
            {rhhTitle: 'RelationshipHistoryIcon'}
        ],
        RelationshipHistoryContent: [
            {
                maritalStatus: 'Married (12-Feb-11)',
                partnerEthincity: 'Indian',
                partnerAge: '32 Yrs',
                consanguineousCouple: 'No'
            }
        ]
    }

    render(){
        return(
            <div className='RelationshipHistory'>
                <PastMedicalHistoryHeader title={this.state.RelationshipHistoryHeader[0].title} >
                <a className='RelationshipHistory__HeaderLink' 
                href={this.state.RelationshipHistoryHeader[1].rhhHref}
                title={this.state.RelationshipHistoryHeader[2].rhhTitle}></a>
                </PastMedicalHistoryHeader>
                <RelationshipHistoryContent
                maritalStatus={this.state.RelationshipHistoryContent[0].maritalStatus}
                partnerEthincity={this.state.RelationshipHistoryContent[0].partnerEthincity}
                partnerAge={this.state.RelationshipHistoryContent[0].partnerAge}
                consanguineousCouple={this.state.RelationshipHistoryContent[0].consanguineousCouple}
                />
            </div>
        );
    }
}

export default RelationshipHistory;
import React, { Component } from 'react';
import '../assets/styles/RelationshipHistoryContent.scss';

class RelationshipHistoryContent extends Component{
    render(){
        return(
            <div className='RelationshipHistoryContent'>
                <div className='RelationshipHistoryContent__1a'>
                    <p className='rhc1aa'>Marital Status</p>
                    <p className='rhc1ab'>{this.props.maritalStatus}</p>
                    <p className='rhc1aa'>Partner Ethincity</p>
                    <p className='rhc1ab'>{this.props.partnerEthincity}</p>
                </div>
                <div className='RelationshipHistoryContent__1b'>
                    <p className='rhc1aa'>Partner Age</p>
                    <p className='rhc1ab'>{this.props.partnerAge}</p>
                    <p className='rhc1aa'>consanguineous couple</p>
                    <p className='rhc1ab'>{this.props.consanguineousCouple}</p>
                </div> 
            </div>
        );
    }
}

export default RelationshipHistoryContent;
import React, { Component } from 'react';
import '../assets/styles/MenstrualHistoryHeader.scss';

class MenstrualHistoryHeader extends Component{
        render(){
            return(
                <div className='MenstrualHistoryHeader'>
                    <h3 className='MenstrualHistoryHeader__Heading'>{this.props.title}</h3>
                    {this.props.children}
                </div>
            );
        }
}

export default MenstrualHistoryHeader;
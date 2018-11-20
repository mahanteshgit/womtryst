import React, { Component } from 'react';
import '../assets/styles/LifeStyle.scss';

class LifeStyle extends Component{
    render(){
        return(
            <div className='LifeStyle'>
                <div className='LifeStyle__Header'>
                    <i className='LifeStyle__Logo'></i>
                    <span className='LifeStyle__Heading'>LifeStyle</span>
                </div>
                <div className='LifeStyle__InfoIcons'>
                     <div className='LifeStyle__Smoke'>
                        <i className='LifeStyle__Cigarette'></i>
                     </div>
                     <div className='LifeStyle__Drinks'>
                        <i className='LifeStyle__Wine'></i>
                     </div>
                     <div className='LifeStyle__Syringe'>
                        <i className='LifeStyle__Injection'></i>
                     </div>
                     <div className='LifeStyle__Coffee'>
                        <i className='LifeStyle__Tea'></i>                    
                     </div>
                     <div className='LifeStyle__Exercise'>
                     <i className='LifeStyle__Gym'></i>                    
                     </div>
                </div>
                <div className='LifeStyle__InfoContent'>
                    <div className='LifeStyle__SmokeDetails'>
                        <h3>{this.props.cigarette}</h3>
                        <p>{this.props.date}</p>
                    </div>
                     <div className='LifeStyle__DrinksDetails'>
                        <h3>{this.props.drinks}</h3>
                        <p>{this.props.duration}</p>
                     </div>
                     <div className='LifeStyle__SyringeDetails'>
                        <h3>{this.props.Injection}</h3>
                        <p>{this.props.count}</p>
                     </div>
                     <div className='LifeStyle__CoffeeDetails'>
                        <h3>{this.props.beverages}</h3>
                        <p>{this.props.quantity}</p>
                     </div>
                     <div className='LifeStyle__ExerciseDetails'>
                        <h3>{this.props.exercise}</h3>
                        <p>{this.props.timing}</p>
                     </div>
                </div>
            </div>
        );
    }
}

export default LifeStyle;
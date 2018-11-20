import React, { Component } from 'react';
import '../assets/styles/PastPregnancies.scss';
//import ReactTable from 'react-table';
//import 'react-table/react-table.css';

class PastPregnancies extends Component{
    render(){
        // const columns = [
        //     {
        //         Header: 'Year',
        //         accessor: 'year'
        //     },
        //     {
        //         Header: 'Outcome',
        //         accessor: 'outcome'
        //     },
        //     {
        //         Header: 'Conception',
        //         accessor: 'conception'
        //     },
        //     {
        //         Header: 'Weeks',
        //         accessor: 'weeks'
        //     },
        //     {
        //         Header: 'Method / Location(EP)',
        //         accessor: 'method'
        //     },
        //     {
        //         Header: 'Puerperium / Treatment(EP)',
        //         accessor: 'puerperium'
        //     },
        //     {
        //         Header: 'D&C',
        //         accessor: 'dc'
        //     },
        //     {
        //         Header: 'Child',
        //         accessor: 'child'
        //     }
        // ]

        // const PastPregnanciesData = [
        //     {
        //         year: 2012, outcome: 'Ectopic', conception: '-' , 
        //         weeks: '-', method: 'Right Tube', puerperium: 'Surgical Removal',
        //         dc: '-', child:''
        //     },
        //     {
        //         year: 2011, outcome: 'Abortion(Anomaly)', conception: 'Natural' , 
        //         weeks: 11, method: 'Induced', puerperium: '-',
        //         dc: 'yes', child:''
        //     },
        //     {
        //         year: 2013, outcome: 'Live', conception: 'Natural' , 
        //         weeks: 39, method: 'Cesarean', puerperium: 'Excessive Bleeding',
        //         dc: '-', child:'Triplet'
        //     },
        //     {
        //         year: 2015, outcome: 'Still', conception: 'Natural' , 
        //         weeks: 35, method: 'Cesarean', puerperium: '-',
        //         dc: '-', child:'Twins'
        //     }
        // ]
        return(
            <div className='PastPregnancies'>
                <div className='PastPregnancies__Header'>
                    <h3 className='PastPregnancies__Heading'>Past Pregnancies 
                        <span className='PastPregnancies__Count'>{this.props.count}</span>
                    </h3>
                </div>
                <div className='clear'></div>

                <div className='PastPregnancies__HeadingDetails'>
                    <div className='PastPregnancies__HeadingDetails--year'>
                        Year
                    </div>
                    <div className='PastPregnancies__HeadingDetails--outcome'>
                        Outcome
                    </div>
                    <div className='PastPregnancies__HeadingDetails--conception'>
                        Conception
                    </div>
                    <div className='PastPregnancies__HeadingDetails--weeks'>
                        Weeks
                    </div>
                    <div className='PastPregnancies__HeadingDetails--method'>
                        Method <br /> / Location <br />(EP)
                    </div>
                    <div className='PastPregnancies__HeadingDetails--Puerperium'>
                        Puerperium <br /> / Treatment <br /> (EP)
                    </div>
                    <div className='PastPregnancies__HeadingDetails--DC'>
                        D&amp;C
                    </div>
                    <div className='PastPregnancies__HeadingDetails--child'>
                        Child
                    </div>
                </div>

                <div className='clear'></div>

                <div className='PastPregnancies__Details'>
                    <div className='PastPregnancies__Details--year1'>
                        <div className='PastPregnancies__HeadingDetails--year color--block'>
                            {this.props.PatientYear}
                        </div>
                        <div className='PastPregnancies__HeadingDetails--outcome color--block'>
                            {this.props.outcome}
                        </div>
                        <div className='PastPregnancies__HeadingDetails--conception color--block'>
                            {this.props.conception}
                        </div>
                        <div className='PastPregnancies__HeadingDetails--weeks color--block'>
                            {this.props.weeks}
                        </div>
                        <div className='PastPregnancies__HeadingDetails--method color--block'>
                            {this.props.method}
                        </div>
                        <div className='PastPregnancies__HeadingDetails--Puerperium color--block'>
                            {this.props.Puerperium}
                        </div>
                        <div className='PastPregnancies__HeadingDetails--DC color--block'>
                            {this.props.dc}
                        </div>
                        <div className='PastPregnancies__HeadingDetails--child color--block'>
                            {this.props.child}
                        </div>
                    </div>
                    <div className='PastPregnancies__Details--year2'>
                        <div className='PastPregnancies__HeadingDetails--year color--block'>
                            2011
                        </div>
                        <div className='PastPregnancies__HeadingDetails--outcome color--block'>
                            Abortion <br/> (Anomaly)
                        </div>
                        <div className='PastPregnancies__HeadingDetails--conception color--block'>
                            Natural
                        </div>
                        <div className='PastPregnancies__HeadingDetails--weeks color--block'>
                            11
                        </div>
                        <div className='PastPregnancies__HeadingDetails--method color--block'>
                            Induced
                        </div>
                        <div className='PastPregnancies__HeadingDetails--Puerperium color--block'>
                            -
                        </div>
                        <div className='PastPregnancies__HeadingDetails--DC color--block'>
                            Yes
                        </div>
                        <div className='PastPregnancies__HeadingDetails--child color--block'>
                            
                        </div>
                    </div>
                    <div className='PastPregnancies__Details--year3'>
                        <div className='PastPregnancies__HeadingDetails--year color--block'>
                            2013
                        </div>
                        <div className='PastPregnancies__HeadingDetails--outcome color--block'>
                            Live
                        </div>
                        <div className='PastPregnancies__HeadingDetails--conception color--block'>
                            Natural
                        </div>
                        <div className='PastPregnancies__HeadingDetails--weeks color--block'>
                            39
                        </div>
                        <div className='PastPregnancies__HeadingDetails--method color--block'>
                            Cesarean
                        </div>
                        <div className='PastPregnancies__HeadingDetails--Puerperium color--block'>
                            Excessive <br />Bleeding
                        </div>
                        <div className='PastPregnancies__HeadingDetails--DC color--block'>
                            -
                        </div>
                        <div className='PastPregnancies__HeadingDetails--child color--block' id='triplet'>
                           Triplet 
                        </div>
                    </div>

                    <div className='PastPregnancies__Triplets'>
                        <div className='PastPregnancies__TripletsInfoHeader'>
                            <div className='PastPregnancies__TripletsInfoHeader--Gender'>
                                Gender
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--weight'>
                                Weight <br /> (kgs)
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--bloodGroup'>
                                Blood <br /> Group
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--breastFeeding'>
                                Breast <br /> Feeding
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--cried'>
                                Cried
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--nicu'>
                                NICU
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--withBaby'>
                                With baby <br /> After Birth
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--congentialDefect'>
                                Congential <br /> Defect
                            </div>
                        </div>
                        <div className='PastPregnancies__TripletsInfoContent'>
                            <div className='PastPregnancies__TripletsInfoHeader--Gender color--block1'>
                                M
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--weight color--block1'>
                                2.40
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--bloodGroup color--block1'>
                                B+
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--breastFeeding color--block1'>
                                Yes
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--cried color--block1'>
                                Yes
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--nicu color--block1'>
                                Yes
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--withBaby color--block1'>
                                Yes
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--congentialDefect color--block1'>
                                None
                            </div>
                        </div>
                        <div className='PastPregnancies__TripletsInfoContent'>
                            <div className='PastPregnancies__TripletsInfoHeader--Gender color--block1'>
                                F
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--weight color--block1'>
                                2.25
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--bloodGroup color--block1'>
                                AB+
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--breastFeeding color--block1'>
                                No
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--cried color--block1'>
                                Dont <br /> Remember
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--nicu color--block1'>
                                No
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--withBaby color--block1'>
                                No
                            </div>
                            <div className='PastPregnancies__TripletsInfoHeader--congentialDefect color--block1'>
                                Breathing <br />Problem
                            </div>
                        </div>
                    </div>

                    <div className='PastPregnancies__Details--year4'> 

                        <div className='PastPregnancies__HeadingDetails--year color--block'>
                            2015
                        </div>
                        <div className='PastPregnancies__HeadingDetails--outcome color--block'>
                            Still
                        </div>
                        <div className='PastPregnancies__HeadingDetails--conception color--block'>
                            Natural
                        </div>
                        <div className='PastPregnancies__HeadingDetails--weeks color--block'>
                            35
                        </div>
                        <div className='PastPregnancies__HeadingDetails--method color--block'>
                            Cesarean
                        </div>
                        <div className='PastPregnancies__HeadingDetails--Puerperium color--block'>
                            -
                        </div>
                        <div className='PastPregnancies__HeadingDetails--DC color--block'>
                            -
                        </div>
                        <div className='PastPregnancies__HeadingDetails--child color--block' id='twins'>
                           Twins
                        </div>
                    </div>
                    <div className='PastPregnancies__Twins'>
                        <p className='PastPregnancies__Twins--gender'>
                            Gender : 
                            <span className='PastPregnancies__Twins--genderType'>M</span>
                            <span className='PastPregnancies__Twins--genderType'>F</span></p>
                    </div>
                </div>

                {/* <ReactTable
                    data={PastPregnanciesData}
                    columns={columns}
                    minRows={0}
                >

                </ReactTable> */}
            </div>
        );
    }
}

export default PastPregnancies;
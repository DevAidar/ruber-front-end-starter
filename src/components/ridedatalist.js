import React from 'react';
import RideData from './ridedata';
import { array, number, func } from 'prop-types';
import historyIcon from '../images/History.png';

const RideDataList = ({ pastRideData, onRideDeleteButton, onRideEditButton, monthlyRides, averageRideLength }) => {

    return (
        <div>
            <div id='datalist-title-content'>
                <img id='datalist-img' src={historyIcon} alt='History Icon' />
                <h1 id='datalist-title'>Past Rides</h1>
            </div>
            <div id='datalist-content'>

                {/* don't hardcode the ride data here. instead, map through
                the pastRideData prop. */}

                <div className='container datalist-containe'>
                    {pastRideData.map(ride => (
                        <div key={ride.id}>
                            <div className='row'>
                                <div className='col-md-4 datalist-content'>{ ride.firstName } { ride.lastName }</div>
                                <div className='col-md-4 datalist-content'>{ ride.pickUp }</div>
                                {/* attach the event handler passed in as a prop */}
                                <div className='col-md-4 datalist-content'><button
                                    className='btn btn-danger btn-sm delete-button pull-right' onClick={ () => onRideDeleteButton(ride) }> x </button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 datalist-content'>{ ride.date }</div>
                                <div className='col-md-4 datalist-content'>{ ride.dropOff }</div>
                                {/* attach the event handler passed in as a prop */}
                                <div className='col-md-4 datalist-content'>
                                    <button
                                    className='btn btn-info btn-sm update-button pull-right' onClick={ () => onRideEditButton(ride) }>&#x21bb;</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Pass monthlyRides and averageRideLength as props
            to RideData */}

            <RideData monthlyRides={ monthlyRides } averageRideLength={ averageRideLength }/>
        </div>
    );


};

RideDataList.propTypes = {
    pastRideData: array,
    onRideDeleteButton: func,
    onRideEditButton: func,
    monthlyRides: number,
    averageRideLength: number
};

export default RideDataList;
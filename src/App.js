import React, { useState, useEffect } from 'react';
import './App.css';
import BookRideForm from './components/bookrideform';
import RideDataList from './components/ridedatalist';
import Header from './components/header';
import BookRideEditForm from './components/bookrideeditform';

const App = () => {

  // Other state variables that may be useful:
  // pastRideData
  // editRideData
  // editIndex
  // monthlyRides
  // averageRideLength


  // 1. Create and initialize state variables.
  // 2. Create four new methods to handle add ride, delete ride, edit
  //    ride and update ride.
  // 3. Pass appropriate props to child components. Each component has
  //    PropTypes indicating the props that it needs.

  const initialState = { isRideEditing: false, };
  const findRideLength = (pickUp, dropOff) => parseInt(Math.random() * 100000) / 100; // Just a temporary solution


  const [state, setState] = useState(initialState);
  const [rides, setRides] = useState([]);
  const [monthlyRides, setMonthlyRides] = useState(0);
  const [averageRideLength, setAverageRideLength] = useState(0);


  const addRide = (ride) => {
    let ids = [];
		for (let rideX of rides) {
			ids.push(rideX.id);
		}
		let id = parseInt(Math.random() * 1000000) + 1;
		while (ids.indexOf(id) !== -1) {
			id++;
		}
    ride.id = id;

    ride.date = `${ String((new Date()).getMonth() + 1).padStart(2, '0') }/${ String((new Date()).getDate()).padStart(2, '0') }/${ (new Date()).getFullYear() }`;

    ride.rideLength = findRideLength(ride.pickUp, ride.dropOff);
    
    setRides([...rides, ride]);
  }

  const deleteRide = (ride) => setRides([
    ...rides.slice(0, rides.indexOf(ride)),
    ...rides.slice(rides.indexOf(ride) + 1)
  ]);

  const editRide = (ride) => {
    if (rides.find(rideX => rideX.id === ride.id).pickUp !== ride.pickUp || rides.find(rideX => rideX.id === ride.id).dropOff !== ride.dropOff)
      ride.rideLength = findRideLength(ride.pickUp, ride.dropOff);
    rides[rides.indexOf(rides.find(rideX => rideX.id === ride.id))] = ride;
    handleStateChange();
  }
	const handleStateChange = (ride = null) => setState({ isRideEditing: ride});


  useEffect (
    () => {
      setMonthlyRides(rides.length);
      setAverageRideLength(rides.length === 0 ? 0 : rides.reduce((sum, ride) => sum + ride.rideLength, 0) / rides.length);
    },
    [rides, state]
  ) 


  const rideHistoryPage = () => {
    return (
      <div className='row'>
        <div className='col-md-6'>
          {state.isRideEditing
            ? <BookRideEditForm updateRide={ editRide } editRideData={ state.isRideEditing }/>
            : <BookRideForm addRide={ addRide }/>
          }
        </div>
        <div className='col-md-6'>
          <RideDataList pastRideData={ rides } onRideDeleteButton={ deleteRide } onRideEditButton={ handleStateChange } monthlyRides={ monthlyRides } averageRideLength={ averageRideLength }/>
        </div>
      </div>
    )
  }


  return (
    <div className='container'>
      <Header />
      {
        rideHistoryPage()
      }
    </div>
  );
}


export default App;

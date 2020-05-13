import React, { useState } from 'react';
import { func } from 'prop-types';
import carIcon from '../images/car-icon.png';

const BookRideForm = ({ addRide }) => {

    const initialRideState = { id: null, firstName: '', lastName: '', pickUp: '', dropOff: '', rideLength: null, date: '' };
    
    const [ride, setRide] = useState(initialRideState);

    const handleInputChange = event => {
		const { name, value } = event.target

		setRide({ ...ride, [name]: value })
	}

    // 1. Create and initialize state variable for form data.
    // 2. Implement two-way binding on form inputs.
    // 3. Implement an onSubmit function for the form to call
    //    addRide function passed in as a prop. Then clear
    //    the form.


    return (
        <div>
            <div id='form-title-content'>
                <img id='form-img' src={carIcon} alt='Car Icon' />
                <h1 id='form-title'>Book Ride</h1>
            </div>
            <div id='form-content'>
                <form id='form-inner-content'
                    onSubmit={event => {
                        event.preventDefault()
                        if (!ride.firstName || !ride.lastName || !ride.pickUp || !ride.dropOff) return;
        
                        addRide(ride);
                        setRide(initialRideState);
                    }}
                >
                    <div className='form-group'>
                        <label htmlFor='first-name'>First Name</label>
                        <input placeholder="Enter your First Name" type='text' className='form-control input-form' name='firstName' value={ride.firstName} id='first-name' onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input placeholder="Enter your Last Name" type='text' className='form-control input-form' name='lastName' value={ride.lastName} id='last-name' onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pick-up'>Pick Up</label>
                        <input placeholder="Enter your Pickup Location" type='text' className='form-control input-form' name='pickUp' value={ride.pickUp} id='pick-up' onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='drop-off'>Drop Off</label>
                        <input placeholder="Enter your Drop Off Location" type='text' className='form-control input-form' name='dropOff' value={ride.dropOff} id='drop-off' onChange={handleInputChange} required />
                    </div>
                    <button type='submit' className='btn btn-primary submit-button'>Submit</button>
                </form>
            </div>
        </div>
    );
}

BookRideForm.propTypes = {
    addRide: func,
}

export default BookRideForm;
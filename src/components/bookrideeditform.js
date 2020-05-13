import React, { useState } from 'react';
import { func, object } from 'prop-types';
import editCarIcon from '../images/edit-ride.png';

const BookRideEditForm = ({ updateRide, editRideData }) => {

    // 1. Create and initialize state variable for form data.
    // 2. Set state form variables to props variables. useEffect
    //    will help with this.
    // 3. Implement two-way binding on form inputs.
    // 4. Implement an onSubmit function for the form to call
    //    an updateRide function passed in as a prop. Then clear
    //    the form.

    const [ride, setRide] = useState(editRideData);

    const handleInputChange = event => {
		const { name, value } = event.target

		setRide({ ...ride, [name]: value })
	}

    return (
        <div>
            <div id='form-title-content'>
                <img id='form-img' src={editCarIcon} alt='Car Icon' />
                <h1 id='form-title'>Edit Ride</h1>
            </div>
            <div id='form-content'>
                <form id='form-inner-content'
                    onSubmit={event => {
                        event.preventDefault()
                        if (!ride.firstName || !ride.lastName || !ride.pickUp || !ride.dropOff) return;
        
                        updateRide(ride);
                    }}
                >
                    <div className='form-group'>
                        <label htmlFor='first-name'>First Name</label>
                        <input  type='text' className='form-control' name='firstName' value={ride.firstName} id='first-name' onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input type='text' className='form-control' name='lastName' value={ride.lastName} id='last-name' onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pick-up'>Pick Up</label>
                        <input type='text' className='form-control' name='pickUp' value={ride.pickUp} id='pick-up' onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='drop-off'>Drop Off</label>
                        <input type='text' className='form-control' name='dropOff' value={ride.dropOff} id='drop-off' onChange={handleInputChange} required />
                    </div>
                    <button type='submit' className='btn btn-warning submit-button'>Update</button>
                </form>
            </div>
        </div>
    );
}

BookRideEditForm
    .propTypes = {
        updateRide: func,
        editRideData: object
    };

export default BookRideEditForm;
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary location-container'>
            Currency {
                <select name="Location" id="Location" className="location-select" onChange={event => changeCurrency(event.target.value)}>
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dolar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            }
        </div>
    );
};

export default Currency;
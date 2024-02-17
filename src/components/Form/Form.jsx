import React, { useState } from 'react';
import './Form.css'

function Form() {
    const [billAmount, setBillAmount] = useState('');
    // People
    const [people, setPeople] = useState(0);
    // Tip Percentage
    const [tipPercentage, setTipPercentage] = useState(10);
    // Total Amount
    const [totalAmount, setTotalAmount] = useState('');

    // Handle Bill
    const handleBillChange = (e) => {
        setBillAmount(e.target.value);
    }

    // Handle Tip
    const handleTipChange = (e) => {
        setTipPercentage(parseInt(e.target.value));
    }

    // Handle People
    const handlePeopleChange = (e) => {
        setPeople(e.target.value);
    }

    // Handle Total 
    const handleTotalChange = () => {
        const tip = (billAmount * tipPercentage) / 100;
        const totalAmount = parseFloat(billAmount) + tip / people;
        
        setTotalAmount(totalAmount.toFixed(2));
    }

    return (
        <div className='Form-Calculator'>
            <h2 className='Form-Title'>Tip Calculator</h2>
            <div className='Form-Bill-Amount'>
                <label>Bill Amount:</label>
                <input 
                    type='number'
                    value={billAmount}
                    onChange={handleBillChange}
                />
            </div>
            {/* Tip Percentage */}
            <div className='Form-Tip-Amount'>
                <label>Tip Percentage:</label>
                <input 
                    type='number'
                    min={5}
                    value={tipPercentage}
                    onChange={handleTipChange}
                />
            </div>
            {/* Number of People */}
            <div className='Form-People'>
                <label>Number of People:</label>
                <input 
                    type='number'
                    min={1}
                    value={people}
                    onChange={handlePeopleChange}
                />
            </div>
            {/* Calculate Total Button */}
            <div className='Form-Button'>
                <button onClick={handleTotalChange}>Calculate</button>
            </div>
            {/* Total Amount Display */}
            <div className='Form-Amount-Display'>
                <h3>Total Amount: {totalAmount}</h3>
                <h3>Tip Amount: {tipPercentage}</h3>
            </div>
        </div>
    );
}

export default Form;

import { useState } from 'react';

function Form() {
    const [bill, setBill] = useState(0.0);
    // Tip Amount
    const [tip, setTip] = useState(10);
    // Number of people
    const [people, setPeople] = useState(0);
    // Total Amount
    const [total, setTotal] = useState(0);

    const billTotal = () => {
        const tipAmount = (bill * tip) / 100;
        const billAmount = Number(bill) + tipAmount;
        setTip(tipAmount);
        setTotal(billAmount);
    };

    return (
        <div>
            <form>
                <label>Bill</label>
                <input 
                    type='text'
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                />
                {/* Tip Amount */}
                <label>Tip %</label>
                <input 
                    type='number'
                    value={tip}
                    onChange={(e) => setTip(e.target.value)}
                    placeholder='Tip %'
                />
                {/* Number of people */}
                <label>Number of people</label>
                <input 
                    type='number'
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                />
                <button onClick={billTotal}>Calculate Total</button>
            </form>
            <div>
                <h3>Tip Amount ${tip.toFixed(2)}</h3>
                <h3>Total ${total.toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default Form;

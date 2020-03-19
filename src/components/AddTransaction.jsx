import React, { useState } from 'react'

export const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    
    return (
        <div>
            <h3>Add new Transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amout">Amount <br/>
                    (negative - expense, positive - income)</label>
                    <input type="number" id="amount" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..."/>
                <button className="btn">Add transaction</button>
                </div>
            </form>
        </div>
    )
}

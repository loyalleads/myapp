import React from 'react'

export const IncomeExpances = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+$0.00</p>
            </div>
            <div>
                <h4>Expances</h4>
                <p id="money-minus" className="money minus">-$0.00</p>
            </div>   
        </div>
    )
}
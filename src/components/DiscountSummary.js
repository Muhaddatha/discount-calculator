import React from "react"


function DiscountSummary(props){

    return(
        <div className="summary-card">
            <p className="price-to-pay">
               {props.finalPrice}
            </p>

            <ul>
                <li>
                    Original Price: {props.price}
                </li>
                <li>
                    Discount rate: {props.discount}%
                </li>
            </ul>

            <button type="button" className="btn-close" aria-label="close"></button>
            
        </div>
    )
}

export default DiscountSummary
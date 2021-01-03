import React from "react"


function DiscountSummary(props){

    return(
        <div className="summary-card">
            <p className="price-to-pay">
                {/* put an icon here of money symbol */}
                {(1 - props.discountRate) * props.originalPrice}
            </p>

            <ul>
                <li>
                    Original Price: {props.originalPrice}
                </li>
                <li>
                    Discount rate: {props.discountRate}%
                </li>
            </ul>
            
        </div>
    )
}

export default DiscountSummary
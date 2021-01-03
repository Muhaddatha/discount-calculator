import React from "react";
import DiscountSummary from "./DiscountSummary"

const Summaries = ({summaries}) => {
    return(
        <div id="summary-container">
            <ul className="summary-list">
                {/* mapping a summary to a list element */}
                {summaries.map(summary => (
                    <DiscountSummary key={summary.id} price={summary.price} discount={summary.discount} finalPrice={summary.finalPrice} />
                ))}
            </ul>
        </div>
    );
}

export default Summaries;
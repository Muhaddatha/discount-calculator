import React from "react";
import DiscountSummary from "./DiscountSummary"

const Summaries = ({summaries, setSummaries}) => {
    return(
        <div id="summary-container">
            <ul className="summary-list">
                {/* mapping a summary to a list element */}
                {summaries.map(summary => (
                    <DiscountSummary key={summary.id} summaries={summaries} setSummaries={setSummaries} summary={summary} />
                ))}
            </ul>
        </div>
    );
}

export default Summaries;
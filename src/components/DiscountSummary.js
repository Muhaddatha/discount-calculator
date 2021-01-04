import React from "react"
// import Summaries from "./Summaries"


const DiscountSummary = ({summary, setSummaries, summaries}) => {

    const deleteHandler = () => {
        console.log("Delete button clicked");
        console.log(summary);
        console.log(summary.price);
        console.log(summaries);
        // setSummaries(summaries.filter((el) => el.id !== summary.id));
        // console.log(summary);
        setSummaries(summaries.filter((el) => el.id !== summary.id));
    }
    return(

        <div className="summary-card">
            <p className="price-to-pay">
               {summary.finalPrice}
            </p>

            <ul>
                <li>
                    Original Price: {summary.price}
                </li>
                <li>
                    Discount rate: {summary.discount}%
                </li>
            </ul>

            <button type="button" className="btn-close" aria-label="close" onClick={deleteHandler}></button>
            
        </div>
    )
}

export default DiscountSummary
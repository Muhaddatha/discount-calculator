import React from "react"

//Handles individual items in the summary container, creates and deletes them
const DiscountSummary = ({summary, setSummaries, summaries}) => {

    //This function is called whenever an item is being deleted
    const deleteHandler = () => {
        console.log("Delete button clicked");
        console.log("Item to be deleted: " + summary);
        
        //filtering the target list item out of the state
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
    );
}

export default DiscountSummary;
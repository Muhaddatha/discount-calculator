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
               Price after discount: ${summary.finalPrice}
            </p>

            <p>
                Original Price: ${summary.price}
                <br></br>
                Discount Rate: {summary.discount}%
            </p>

            <input type="button" className="btn-close" aria-label="close" onClick={deleteHandler} value="Delete"></input>
            
        </div>
    );
}

export default DiscountSummary;
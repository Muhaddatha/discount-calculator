import React from "react";

let elementId = 0;

const Form = ({summaries, setSummaries, priceText, setPriceText, discountText, setDiscountText}) => {

    

    //updates the price prop when it changes in the form
    const priceHandler = (e) =>{
        setPriceText(e.target.value);
    }

    //updates the discount prop when it changes in the form
    const discountHandler = (e) => {
        setDiscountText(e.target.value);
    }

    //This function is called when the form is submitted
    const formHandler = (e) => {
        e.preventDefault();
        console.log("Form submit button clicked");
        
        console.log("Form values -> priceText: " + priceText + " / dicountText:  " + discountText);
        

        console.log("The id is: " + elementId);
        setSummaries([
            ...summaries, {price: priceText, discount: discountText, finalPrice: priceText*(1-discountText/100), id: elementId}
        ]);

        elementId++;
        setPriceText("");
        setDiscountText("");

    }

    const areInputsNumeric = (price, discountRate) =>{
        return true;
    }



    return(

        <form onSubmit={formHandler}>
            <label htmlFor="original-price-input">
                <input onChange={priceHandler} value={priceText} type="text" id="original-price-input"/>
            </label>

            <label htmlFor="discount-rate-input">
                <input onChange={discountHandler} value={discountText} type="text" id="discount-rate-input"/>
            </label>

            <input type="submit" id="calculate-btn" value="Calculate" />
            
        </form>

    );

}

export default Form;

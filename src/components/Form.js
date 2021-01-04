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

        
        
        if(areInputsNumeric()){
            console.log("The id is: " + elementId);
            setSummaries([
                ...summaries, {price: priceText, discount: discountText, finalPrice: priceText*(1-discountText/100), id: elementId}
            ]);

            elementId++;
            setPriceText("");
            setDiscountText("");
        }
        else{
            console.log("Inputs are not valid.");
        }
        

    }

    //validates form inputs
    function areInputsNumeric(){

        console.log("Checking if inputs are valid...");
        
        //pattern checks for float values
        let pattern = /[+]?([0-9]*[.])?[0-9]+/;

        discountText.replace('%', '');
        priceText.replace('$', '');

        if(!(priceText.match(pattern) && !isNaN(priceText) && priceText > 0)){
            console.log("Price input is not valid.");
            alert("Please enter a valid price without the dollar sign.");
            return false;
        }
        else if(!(discountText.match(pattern) && !isNaN(discountText) && discountText <= 100 && discountText >= 0 )){
            console.log("Discount rate is not valid.");
            //alert
            alert("Please enter a valid discount percentage between 0 and 100 without the percent(%) sign.");
            return false;
        }

        return true;
    }



    return(

        <form onSubmit={formHandler}>
            <label htmlFor="original-price-input">
                <i className="fas fa-dollar-sign"></i>
                <input onChange={priceHandler} value={priceText} type="text" id="original-price-input" required/>
            </label>

            <label htmlFor="discount-rate-input">
                <i className="fas fa-percentage"></i>
                <input onChange={discountHandler} value={discountText} type="text" id="discount-rate-input" required/>
            </label>

            <input type="submit" id="calculate-btn" value="Calculate" />
            
        </form>

    );

}

export default Form;

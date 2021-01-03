import React from "react";

const Form = () => {
    return(

        <form>
            <label for="original-price-input">
                <input type="text" id="original-price-input"/>
            </label>

            <label for="discount-rate-input">
                <input type="text" id="discount-rate-input"/>
            </label>

            <input type="submit" id="calculate-btn" value="Calculate"/>
            
        </form>

    );

}

export default Form

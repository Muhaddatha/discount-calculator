import React, {useState} from "react";
import './normalize.css';
import './bootstrap.min.css';
import './App.css';
import Form from "./components/Form";
import Summaries from "./components/Summaries";

function App() {

  //variables used to store the state of the elements
  const [priceText, setPriceText] = useState("");
  const [discountText, setDiscountText] = useState(""); 
  //array that holds all the calculations
  const [summaries, setSummaries] = useState([]);

  return (
    <div className="App"> 
      {/* form components manipulates the data that will be appended to the summaries
      container. */}
      <Form summaries={summaries} setSummaries={setSummaries} priceText={priceText} setPriceText={setPriceText} discountText={discountText} setDiscountText={setDiscountText}/>

      {/* All calculation summaries are appended here. */}
      <Summaries summaries={summaries} setSummaries={setSummaries} />
    </div>
  );
}

export default App;

import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import Summaries from "./components/Summaries";

function App() {

  const [priceText, setPriceText] = useState("");
  const [discountText, setDiscountText] = useState(""); 
  const [summaries, setSummaries] = useState([]);

  return (
    <div className="App">
      <h1>Hi</h1> 
      <Form summaries={summaries} setSummaries={setSummaries} priceText={priceText} setPriceText={setPriceText} discountText={discountText} setDiscountText={setDiscountText}/>
      <Summaries summaries={summaries} setSummaries={setSummaries} />
    </div>
  );
}

export default App;

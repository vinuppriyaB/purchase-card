
import * as React from "react";

import { Purchasedcards } from "./Purchasedcards";
import Button from "@mui/material/Button";

export function Purchased({ count, setCount ,purchase,setPurchase,history}) {
  
  return (
    <div>
    <div className="cardlist">
      {purchase.map((crd, index) => (
        <Purchasedcards
          key={index}
          type={crd.type}
          stars={crd.stars}
          price={crd.price}
          btn={crd.btn}
          sale={crd.sale}
          count={count}
          setCount={setCount} 
          purchase={purchase} 
          setPurchase={setPurchase}
          id={index}
          history={history}/>
      ))}
     
    </div>
     <Button
       className="back-btn"         
     onClick={() => {
      history.push("/")
      
     }}
   
     variant="outlined"
     style={{
       borderColor: "black",
       color: "black",
       backgroundColor: "white",
     }}
   >
   back
   </Button>
   </div>
  );
}

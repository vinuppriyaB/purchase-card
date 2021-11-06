import * as React from "react";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";


export function Purchasedcards({ type, stars, price, btn, sale,id, count, setCount,purchase,setPurchase,history }) {
 

 
  const [color, setColor] = useState("black");
  const [bgcolor, setBgColor] = useState("white");

  return (
    <div>
      <div className="card_container">
        <div className="product_image">
          <div>
            <p>450</p>
          </div>
          <div>
            <ClearIcon />
          </div>
          <div>
            <p>300</p>
          </div>
          {sale === "Sale" ? (
            <div className="sale-tag">{sale}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="card-content">
          <div>
            <h3>{type}</h3>
            <p className="star-icon">{stars}</p>
            <p>{price}</p>
          </div>

          <div>
            
              <Button
                className="card-btn"
                onClick={() => {
                 
                  setColor("white");
                  setCount(count - 1);
                  setBgColor("lightgrey");
                  
                 
                    let currentlist =purchase.filter((prod, index) => index !== id);
                    setPurchase(currentlist);
      
                    
                 
                }}
              
                variant="outlined"
                style={{
                  borderColor: "black",
                  color: color,
                  backgroundColor: bgcolor,
                }}
              >
               cancel
              </Button>
          
          </div>
        </div>
      </div>
      
    </div>
  );
}

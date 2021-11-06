import * as React from "react";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";


export function Cards({ type, stars, price, btn, sale, count, setCount,purchase,setPurchase }) {
  
  
  const [color, setColor] = useState("black");
  const [bgcolor, setBgColor] = useState("white");
  const [disable, setDisable] = React.useState(false);

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
            {btn === "Add to card" ? (
              <Button
                className="card-btn"
                onClick={() => {
                  setDisable(true);
                  setColor("white");
                  setCount(count + 1);
                  setBgColor("lightgrey");
                  setPurchase([...purchase,{ type:type, stars:stars,price: price, btn:btn, sale:sale}])
                  console.log(purchase);
                }}
                disabled={disable}
                variant="outlined"
                style={{
                  borderColor: "black",
                  color: color,
                  backgroundColor: bgcolor,
                }}
              >
                {btn}
              </Button>
            ) : (
              <Button
                className="card-btn"
                variant="outlined"
                style={{ borderColor: "black", color: "black" }}
              >
                {btn}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

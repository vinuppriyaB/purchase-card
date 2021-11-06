import * as React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Cards } from "./Cards";

export function CardList({ count, setCount ,purchase,setPurchase,disable,setDisable}) {
  const star = (
    <div>
      <StarIcon style={{ color: "orange" }} />
      <StarIcon style={{ color: "orange" }} />
      <StarIcon style={{ color: "orange" }} />
      <StarIcon style={{ color: "orange" }} />
      <StarIcon style={{ color: "orange" }} />
    </div>
  );
  const cardlist = [
    {
      type: "Fancy Product",
      sale: "",
      price: "$40.00-$80.00",
      btn: "View options",
    },
    {
      type: "Special item",
      sale: "Sale",
      stars: star,
      price: (
        <div>
          <s>$20.00</s> <spam>$18.00</spam>
        </div>
      ),
      btn: "Add to card",
    },
    {
      type: "Sale Item",
      sale: "Sale",
      price: (
        <div>
          <s>$50.00</s> <spam>$25.00</spam>
        </div>
      ),
      btn: "Add to card",
    },
    {
      type: "Popular Item",
      sale: "",
      stars: star,
      price: "$40.00",
      btn: "Add to card",
    },
    {
      type: "Sale Item",
      sale: "Sale",
      price: (
        <div>
          <s>$50.00</s> <spam>$25.00</spam>
        </div>
      ),
      btn: "Add to card",
    },
    {
      type: "Fancy product",
      sale: "",
      price: "$120.00-$280.00",
      btn: "View options",
    },
    {
      type: "Special Item",
      sale: "Sale",
      stars: star,
      price: (
        <div>
          <s>$20.00</s> <spam>$18.00</spam>
        </div>
      ),
      btn: "Add to card",
    },
    {
      type: "Popular Item",
      sale: "",
      stars: star,
      price: "$40.00",
      btn: "Add to card",
    },
  ];
  return (
    <div className="cardlist">
      {cardlist.map((crd, index) => (
        <Cards
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
          disable={disable} 
          setDisable={setDisable}/>
      ))}
    </div>
  );
}

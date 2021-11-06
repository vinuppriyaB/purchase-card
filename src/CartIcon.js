import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import { useHistory } from "react-router-dom";
import "./App.css";

export function CartIcon({count,setCount,history}){
    
    return(
        <Button
       
        onClick={() => history.push("/cart")}
        variant="outlined"
        startIcon={<ShoppingCartIcon />}
        style={{ borderColor: "black", color: "black" }}
      >
        Cart <span className="cart-count">{count}</span>
      </Button>

    )
}
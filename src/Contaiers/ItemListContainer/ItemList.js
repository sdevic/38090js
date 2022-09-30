import { Item } from "../Item/Item"
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";


const ItemList = ({listProducts})=>{
    
    return(
        <>
        {listProducts.map( (prod, i) =>
           <>
        <Item key={`${prod.product}-${i}`}product={prod}/>
        <div id="detalleBoton">
        <Link to={`/producto/${prod.id}`}>
                    <Button id="verDetalle">Ver detalle</Button>
                </Link> 
                </div>
                </>
                )}
        </>
        
    )
}
export  {ItemList}  
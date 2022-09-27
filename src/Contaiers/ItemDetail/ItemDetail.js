
 import { Item } from "../../Components/Item";





const ItemDetail = ({producto})=>{
    
    return(
        <>
        {producto.map( (prod, i) => <Item key={`${prod.product}-${i}`}product={prod}/>)}
       
        </>
        
    )
}

export  {ItemDetail}  
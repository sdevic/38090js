import { Button ,Text,VStack,Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({product})=>{
    
   
    return(
        <>
            {!product ?
                <> </>
            :
            
            <VStack id="vstack">
                <Text>{product.description}</Text>
                <Image id='imgProd' src={product.image} alt="" /> 
                <Link to={'/producto/'}>
                    <Button>Ver detalle</Button>
                </Link>    
                
            </VStack>
                
            }
        </>
    )
}


export  {Item}  
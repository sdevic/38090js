import { Text,VStack,Image } from "@chakra-ui/react";
// traigo el producto y solo muestro la descripcion , la imagen y el precio

const Item = ({product})=>{
  
    return(
        <>
            {!product ?
                <> </>
            :
            
            <VStack id="vstack">
                <Text>{product.description}</Text>
                <Image id='imgProd' src={product.image} alt="" /> 
                <Text>${product.price}</Text>
                
            </VStack>
                
            }
        </>
    )
}


export  {Item}  


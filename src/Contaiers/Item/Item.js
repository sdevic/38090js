import { Text,VStack,Image } from "@chakra-ui/react";
;

const Item = ({product})=>{
  
    return(
        <>
            {!product ?
                <> </>
            :
            
            <VStack id="vstack">
                <Text>{product.description}</Text>
                <Image id='imgProd' src={product.image} alt="" /> 
                 
                
            </VStack>
                
            }
        </>
    )
}


export  {Item}  


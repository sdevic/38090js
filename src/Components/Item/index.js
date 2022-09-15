import { Button ,Text,VStack,Image } from "@chakra-ui/react";


const Item = ({product})=>{
    
    return(
        <>
            {!product ?
                <> </>
            :
                <VStack >
                    <Text>{product.description}</Text>
                    <Image id='imgProd' src={product.image} alt="" /> 
                    <Button>Ver detalle</Button>
                </VStack>
            }
        </>
    )
}


export  {Item}  
import { Button ,Text,VStack,Image } from "@chakra-ui/react";


const ItemDetail = ({producto})=>{
    
    return(
        <>
            {!producto ?
                <> </>
            :
            
            <VStack id="vstack">
                <Text>{producto.description}</Text>
                <Image id='imgProd' src={producto.image} alt="" /> 
                <Button>Ver detalle</Button>
            </VStack>
                
            }
        </>
    )
}


export  {ItemDetail}  
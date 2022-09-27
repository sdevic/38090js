import { Button ,Text,VStack,Image } from "@chakra-ui/react";


const Item = ({producto})=>{
    console.log(producto)
    
    return(
        <>
           
            
            <VStack id="vstack">
                
                <Text>{producto.stock}</Text>
                <Image id='imgProd' src={producto.image} alt="" /> 
                <Button>Ver detalle</Button>
            </VStack>
                
            
        </>
    )
}


export  {Item}  
const Item = ({product})=>{
    console.log(product?.id)
    return(
        <>
        <div>{product?.image}</div>
        </>
    )
}


export  {Item}  
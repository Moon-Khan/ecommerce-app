import ProdCard from "./productCards";

function ProdItem({prods}){

    return (
        <div className="prod-grid">            
            {
                prods.map(  
                    prod=>(
                        <ProdCard key={prod.id} prod={prod} />
                    )
                )
                
            }
        </div>
    )

}

export default ProdItem;
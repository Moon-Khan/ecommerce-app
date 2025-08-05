import { createContext, useState } from "react"
import Heeader from "./header";
import ProductList from "./productList";

export const UserContext = createContext();


function HomePage(){

    const [search, setSearch] = useState("")

    return(        
        <UserContext.Provider value= {{username: "Mamoon"}}>
            <Heeader searchQuery= {setSearch} />

            <ProductList searchQuery={search}></ProductList>
        </UserContext.Provider>            
    )

}

export default HomePage;
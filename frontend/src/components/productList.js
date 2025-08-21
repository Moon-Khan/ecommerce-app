import { useEffect, useState } from "react"
import ProdItem from "./productItem"
import { getAllProduct } from "../api/productService"
import TableFooter from "../common/TableFooter";
import { useTableFeatures } from "../hook/useTableFeatures";

function ProductList ({searchQuery}){

    const {
        page,
        dataPerPage,
        sortOrder,
        setPage,
        setDataPerPage,
        sortCol,
        setSortCol
      } = useTableFeatures({ initialDataPerPage: 5, initialSortOrder: "asc" });
    

    const [productData, setProductData] = useState([])
    const [totalDataCount, seTotalDataCount] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchProducts = ()=>{
        setLoading(true);
        const query = {
            page,
            limit: dataPerPage,
            sort: sortOrder,
            sortCol: sortCol
          };

        getAllProduct(query).then((res)=>{
            seTotalDataCount(res.data.meta.total)
            setPage(res.data.meta.page)
            setProductData(res.data.data);
            setLoading(false)
        }).catch((error)=>{
            setError(error);
            setLoading(false)
        })
    }

    useEffect(()=>{

        fetchProducts()

    }, [page, dataPerPage, sortOrder])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error?.message || "Something went wrong"}</p>;


    const filterProds = productData.filter((prod)=>(
        prod.title && prod.title.toLowerCase().includes(searchQuery.toLowerCase())
    ))


    return (
        <div>
          
            <ProdItem prods={filterProds}></ProdItem>
            <TableFooter
                totalDataCount = {totalDataCount}
                page = {page}
                dataPerPage={dataPerPage}
                setPage={setPage}
                setDataPerPage={setDataPerPage}
            >

            </TableFooter>
            
        </div>
    )
}

export default ProductList;

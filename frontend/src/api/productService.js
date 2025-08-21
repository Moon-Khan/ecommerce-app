import API_BASE_URL from "./config";

export async function getAllProduct(params = {}) {
    try{

        console.log("IN GET PRODUCT")
        const query = new URLSearchParams(params).toString();

        const res = await fetch(`${API_BASE_URL}products/?${query}`)
        console.log("res", res)

        if (!res.ok){
            throw new Error(`Error fetching product: ${res.statusText}`);
        }
        
        return res.json();

    } catch(error){
        console.error("getProductById error:", error);
        throw error;
    }
}
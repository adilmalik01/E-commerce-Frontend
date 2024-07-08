import { useEffect, useState } from "react"
import baseUrl from "../../../core"
import axios from "axios"
import AdminProdut from "../adminProduct/AdminProduct";



const VeiwProducts = () => {
    const [productss, setProcuts] = useState([])
  const fetchProducts = async (e) => {
        try {
            const response = await axios.get(`${baseUrl}/api/v1/allproducts`)
            setProcuts(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    // CandinateAvatar  productName productPrice 


    return (<>
        <div className="min-h-screen  w-full py-10  overflow-hidden">

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productss.map((product, i) => (
                        <AdminProdut key={i} product={product} />
                    ))}
                </div>
            </div>
        </div>

    </>);
}

export default VeiwProducts;
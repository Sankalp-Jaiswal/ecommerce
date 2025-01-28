import React, { createContext, useEffect, useState } from 'react'
// import { products } from '../assets/frontend_assets/assets'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const currency = '$'
    const delivery_fee = 10
    const companyName = 'Forever'
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [token, setToken] = useState()

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size", { autoClose: 400 })
            return
        }

        let cartData = structuredClone(cartItems)

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)

        if (token) {
            try {
                await axios.post(`${backendURL}/api/cart/add`, { itemId, size }, { headers: { token } });
            } catch (error) {
                console.error(error)
                toast.error(error.message)

            }
        }


        toast.success("Item is added to Cart", { autoClose: 300 }) // Set duration to 2000ms (2 seconds)
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)

        cartData[itemId][size] = quantity

        setCartItems(cartData)
        if (token) {
            try {
                await axios.post(`${backendURL}/api/cart/update`, { itemId, size, quantity },
                    { headers: { token } });
            } catch (error) {
                console.error(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalCount
    }
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {

                }
            }

        }
        return totalAmount
    }

    const getProductData = async () => {
        try {
            const response = await axios.get(`${backendURL}/api/product/list`);
            if (response.data.success) {
                setProducts(response.data.products)
            } {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getUserCart = async (token) => {
        try {            
            const response = await axios.post(`${backendURL}/api/cart/get`, { headers: { token } });
            
            if (response.data.success) {
                setCartItems(response.data.cartData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getProductData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(token || localStorage.getItem('token'))
            
            
        }
    }, [])

    const value = {
        products,
        currency,
        delivery_fee,
        companyName,
        search, setSearch, showSearch, setShowSearch,setCartItems,
        cartItems, setCartItems, addToCart, getCartCount, updateQuantity, getCartAmount,
        navigate,
        setToken, token,
        backendURL
    }


    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
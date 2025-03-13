import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})

    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {

        let carData = structuredClone(cartItems)
        if(!size){
            toast.error('Select Product Size')
            return
        }
        if(carData[itemId]){
            if(carData[itemId][size]){
                carData[itemId][size] +=1
            }else{
                carData[itemId] [size] = 1
            }
        }else{
            carData[itemId] = {}
            carData[itemId][size] = 1
        }
        setCartItems(carData)

    }

    const getCartCount = () =>{
        let totalCount = 0
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items] [item] > 0){
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalCount
    }

    const updataQuantity = (itemId,size,quantity) =>{
        let cartData = structuredClone(cartItems)

        cartData[itemId][size] = quantity

        setCartItems(cartData)
    }

    const getCartAmount = () => {
        let totalAmount = 0

        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items)
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items] [item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount
    }
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updataQuantity,
        getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

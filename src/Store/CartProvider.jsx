import React, { useState,useContext ,useEffect } from "react";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext";

const defaultCart={
  products:[],
  totalAmount:0
}
const CartProvider = (props) => {

    const authcontext = useContext(AuthContext)
    
    const email = authcontext.email.replace(/[^a-zA-Z0-9]/g, "");
    const [cart, setCart] = useState(defaultCart);
    if(!sessionStorage.getItem("fetchExecuted" ) && authcontext.isLoggedIn){
      fetch(`https://the-generics-79cb0-default-rtdb.firebaseio.com/cart${email}.json`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({products:[],totalAmount:0})
      })
      sessionStorage.setItem('fetchExecuted',true)


    }
    useEffect(()=>{
      if(!authcontext.isLoggedIn){
        setCart(defaultCart)
      }
    },[authcontext.isLoggedIn])


  const addProductToCart = async (product) => {
    const existingCartItemIndex = cart.products.findIndex(
    (cartItem)=>cartItem.id === product.id
    )
    const existingCartItem = cart.products[existingCartItemIndex]
    let updatedItems;

    if(existingCartItem){
    const updatedItem={
      ...existingCartItem,
      quantity:existingCartItem.quantity +1,
      amount: existingCartItem.amount + product.amount,
    }
    updatedItems = [...cart.products];
    updatedItems[existingCartItemIndex] = updatedItem;

    }else{
      const newProduct ={
        ...product,
        quantity: 1,

      }
      updatedItems = cart.products.concat(newProduct);

    }
    const updatedTotalAmount = cart.totalAmount + product.amount
    setCart({
      products:updatedItems,
      totalAmount:updatedTotalAmount
    })
    try{
      const response = await fetch(`https://the-generics-79cb0-default-rtdb.firebaseio.com/cart${email}.json`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          products:updatedItems,
          totalAmount:updatedTotalAmount
        })
      })
      if(!response.ok){
        console.log("Something went wrong while adding the item to database")
      }else{
        console.log("successfully added item to the database")
      }
    }catch(error){
      console.log(error.message)
    }
  };
  
  const removeProductFromCart = async(id) => {
    const existingCartItemIndex = cart.products.findIndex(
      (cartItem)=>cartItem.id===id
    )
    const existingItem = cart.products[existingCartItemIndex];
    const updatedTotalAmount = cart.totalAmount - existingItem.amount;
    const updatedItems = cart.products.filter((item) => item.id !== id);
    setCart({
      products: updatedItems,
      totalAmount: updatedTotalAmount,
    });
try{
  const response = await fetch(`https://the-generics-79cb0-default-rtdb.firebaseio.com/cart${email}.json`,{
  method:"PUT",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    products:updatedItems,
    totalAmount:updatedTotalAmount
  })
  }
  )
  if(!response.ok){
    console.log("Something went wrong while deleting the item from database")
  }else{
    console.log("Successfully deleted the item from database");
  }

}catch(error){
  console.log(error.message);
}

};

const updateQuantity = async (id, quantity) => {
  const existingCartItemIndex = cart.products.findIndex(
    (cartItem) => cartItem.id === id
  );
  const existingItem = cart.products[existingCartItemIndex]
    const updatedItem={
      ...existingItem,
      quantity:quantity,
      amount : (existingItem.amount/existingItem.quantity) * quantity
    }
    const updatedItems =[...cart.products]
    updatedItems[existingCartItemIndex]= updatedItem
    const updatedTotalAmount = cart.products.reduce(
      (acc,item)=>acc + item.amount,0
    )
      setCart({
        products:updatedItems,
        totalAmount:updatedTotalAmount
      })
      try{
        const response = await fetch(`https://the-generics-79cb0-default-rtdb.firebaseio.com/cart${email}.json`,{
          method:'PUT',
          headers:{'Content-Type':"application/json"},
          body:JSON.stringify({
            products:updatedItems,
            totalAmount:updatedTotalAmount
          })
        })
        if(!response.ok){
          console.log("Something went wrong while updating the item in database");

        }else{
          console.log("Successfully updated the item in database");

        }

      }catch(error){
        console.log(error.message)
      }

}
  
const fetchCartProducts =async ()=>{
  try{
    const response = await fetch(`https://the-generics-79cb0-default-rtdb.firebaseio.com/cart${email}.json`)
    if(!response.ok){
     console.log("Something went wrong while fetching Items from the database");
      } else {
        console.log("Successfully fetched items from the database");
      }
      const data = await response.json()
      setCart({
        products:data.products,
        totalAmount:data.totalAmount
      })
  }catch(error){
    console.log(error.message)
  }
}
useEffect(() => {
  fetchCartProducts();
}, []);
  
  const cartContext = {
    products: cart.products,
    totalAmount: cart.totalAmount,
    addProduct: addProductToCart,
    removeProduct: removeProductFromCart,
    updateQuantity: updateQuantity,
    getProducts: fetchCartProducts,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

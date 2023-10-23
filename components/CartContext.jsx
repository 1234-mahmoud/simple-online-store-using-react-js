import React, { useState, createContext,useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))//if there are items in the cart return them else return []
      : []
  );
  //add to cart function
  const addToCart = (item) => {

    
    //check the cart is empty or not
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {

      //update cart --> old cart with it's data and updata it
      setCart(
        //creating a new array with map--->loop on data
        cart.map((cartItem) =>

        // ↡    ↡     ↡   ↡    ↡

        //we check again as the same item will be send through increase btn +  <----------------------
        // if you remove ...cartItem from line 27 the error will ocure as there is no item with unique ID
        //...cartItem -->means extracting all items and add quantity prop
        // cartItem -->is an object that contains all the data(id,name,price,img)
          cartItem.id === item.id //id that send with + btn
          //if true -->at each click increase the quantity 1
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      );

    } else {
      //as this condition is executed at first as the cart is empty
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  //delete from cart function
  const deleteFromCart = (item) => {
    /*
    ex: cart contains of id [1,2,3,4,5] and productId after clicking on btn is 1 , 
       [1 from cart = 1 'productId' ]--->this condition is not achived 
       as the cart [1 , 2 , 3 , 4]
                    |
         productId [1]

         1=1 ==> the condition is not achived and the returned values are 
         all id not equal to product id 
         '''all items != id of product inside the cart and the passed id'''
    */

    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };


  

  //total function

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

//localstorage

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

useEffect(() => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    setCart(JSON.parse(cart));
  }
}, []);

  //currency function

  const currency = Intl.NumberFormat("EGP", {
    style: "currency",
    currency: "EGP",
  });

  // increase and decrease quantities functions

  const values = {
    cart,
    addToCart,
    deleteFromCart,
    getCartTotal,
    currency,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/SearchBar/SearchBar";
import Groceries from "./components/Groceries/Groceries";
import Cart from "./components/Cart/Cart";
function App() {
  ////////////////VARIABLES/////////////////
  const grocStyle = {
    border: "1px solid #ccc",
    boxShadow: "-3px 3px 2px 5px #eee",
    width: "40%",
    position: "absolute",
    textAlign: "left",
    left: "5%",
    marginTop: "20px",
    padding: "10px",
  };
  const cartStyle = {
    border: "1px solid #ccc",
    boxShadow: "-3px 3px 2px 5px #eee",
    width: "40%",
    position: "absolute",
    textAlign: "left",
    left: "50%",
    marginTop: "20px",
    padding: "10px",
  };
  ///////////////////STATES////////////////////
  const groceriesArr = [
    "Apple",
    "Bread",
    "Strawberry",
    "Water",
    "Dog Food",
    "Beer",
    "Trousers",
    "Meat",
    "Sneakers",
    "Sunglasses",
  ];
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [cartState, setCartState] = useState("Cart");
  ///////////////////////////METHODS///////////////////////////
  // eslint-disable-next-line no-unused-vars
  let Products = null;
  // eslint-disable-next-line no-unused-vars
  let renderCartItems = null;
  let cartTitle = null;
  ///SEARCHBAR FUNCTIONALITY
  const searchBarHandler = (e) => {
    setSearchResults(e.target.value);
  };
  ////SEARCH FILTER
  // eslint-disable-next-line array-callback-return
  const searchResultsFilter = groceriesArr.filter((groceries) => {
    if (searchResults == null) {
      return groceries;
    } else {
      return (
        groceries.toLowerCase().indexOf(searchResults.toLowerCase()) !== -1
      );
    }
  });
  //////ADD TO CART
  ////////////////////
  const getItemNameHandler = (e) => {
    const newValue = cartItems.concat(e.target.parentNode.lastChild.innerHTML);
    setCartItems(newValue);
  };
  /////////REMOVE FROM CART /////////////
  const removeCartItemHandler = (e) => {
    let filteredItems = cartItems.filter(
      (item) =>
        item !== e.target.parentNode.parentNode.lastChild.lastChild.innerHTML
    );
    setCartItems(filteredItems);
  };
  //////////////EMPTY CART ///////////////
  const emptyCartHandler = () => {
    setCartItems([]);
  };
  /////////CART HEADING TITLE/////////////
  useEffect(() => {
    if (cartItems.length === 0) {
      setCartState("Your Cart is Empty");
    } else {
      setCartState("Cart");
    }
  });

  ///////////////////
  return (
    <div className="App">
      <Header />
      <Search changed={searchBarHandler} />

      <div className="MainContainer">
        <div style={grocStyle}>
          <h1>Groceries</h1>
          {searchResultsFilter.map((groceries) => {
            return (Products = (
              <div className="Grocery">
                <Groceries addToCart={getItemNameHandler} name={groceries} />
              </div>
            ));
          })}
        </div>
        <div style={cartStyle}>
          <div className="CartHeading">
            <h1>{cartState}</h1>
            <button onClick={emptyCartHandler}>
              <i className="fas fa-trash"></i>
            </button>
          </div>

          {cartItems.map((item) => {
            return (
              <div>
                <Cart
                  componentName={"Cart"}
                  itemsList={item}
                  removeItem={removeCartItemHandler}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;

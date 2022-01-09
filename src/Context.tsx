import React, { useState, useEffect } from "react";
import {
  DataFetch,
  ContextProviderProps,
  GlobalContextInterface,
} from "./interfaces";

const GlobalContext = React.createContext<GlobalContextInterface>({cartItems : [] as DataFetch[], allPhotos : [] as DataFetch[], toggleFavorite: (id: string) => {}, addToCart: (newItem: DataFetch) => {}, removeFromCart: (id : string) => {}, emptyCart: () => {}});

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {

  const [allPhotos, setAllPhotos] = useState<DataFetch[]>([] as DataFetch[]);
  const [cartItems, setCartItems] = useState<DataFetch[]>([] as DataFetch[])


  const fetchCall = async () => {
    const result = await fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    );
    const data = await result.json();
    return await data;
  };

  useEffect(() => {
    fetchCall().then((data) => {
      setAllPhotos(() => {
        return data;
      });
    });
  }, []);

  function toggleFavorite(id: string): void {
    const updatedArr: DataFetch[] = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    
    setAllPhotos(updatedArr)
  }

  function addToCart(newItem :  DataFetch) : void {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  function removeFromCart(id : string){
    console.log("working remove cart")
    const filteredItems = cartItems.filter(item => item.id !== id)
    setCartItems(filteredItems)
  }

  function emptyCart(){
    setCartItems([])
  }


  return (
    <GlobalContext.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };

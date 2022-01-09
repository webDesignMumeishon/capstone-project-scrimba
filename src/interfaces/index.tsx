export type ContextProviderProps = {
  children: JSX.Element;
};

export interface DataFetch {
  id: string;
  isFavorite: boolean;
  url: string;
}

export interface GlobalContextInterface{
  allPhotos: DataFetch[]
  cartItems : DataFetch[]
  toggleFavorite: (id : string) => void
  addToCart: (newItem : DataFetch) => void
  removeFromCart: (id : string) => void
  emptyCart: () => void
};


export interface ImageProps{
  key?: string
  img: DataFetch
  className: string | undefined
}

export interface CartItemsProps{
  item: DataFetch
}


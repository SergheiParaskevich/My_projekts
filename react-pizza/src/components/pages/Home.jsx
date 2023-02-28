import React from 'react'

import Categories from "../Categories/index";
import Sort from "../Sort/index"
import PizzaBlock from "../PizzaBlock/index";
import Skeleton from "../PizzaBlock/Skeleton";


export default function Home() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
   React.useEffect(()=> {
    
    fetch("https://63f5f30759c944921f69da7a.mockapi.io/items")
    .then((res) =>
      {return res.json()})
    .then((arr) => {setItems(arr); setIsLoading(false) } , []);
   })
        
  return (
    <>
         <div class="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 class="content__title">All pizza</h2>
          <div class="content__items">
          {
            isLoading ? [...new Array(6)].map((e) => <Skeleton />) :    items.map((elem) => (
              <PizzaBlock
                key={elem.id}
                title={elem.title}
                price={elem.price}
                imageUrl={elem.imageUrl}
                sizes={elem.sizes}
                types={elem.types}
              />
            ))}
          
          </div>
    </>
  )
}

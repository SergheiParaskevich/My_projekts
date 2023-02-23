import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import "./scss/app.scss";
import PizzaBlock from "./components/PizzaBlock";
import React from "react";


function App() {
 
  const [items, setItems] = React.useState([])

 React.useEffect(()=> {
  
  fetch("https://63f5f30759c944921f69da7a.mockapi.io/items")
  .then((res) =>
    {return res.json()})
  .then((arr) => { setItems(arr)})

  
 } , [])


  return (
    <div class="wrapper">
      <Header />

      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">All pizza</h2>
          <div class="content__items">
            {items.map((elem) => (
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
        </div>
      </div>
    </div>
  );
}

export default App;

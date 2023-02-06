import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import "./scss/app.scss";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from "./assets/img/bd.json";

function App() {
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
            {pizzas.map((elem) => (
              <PizzaBlock
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

import Appbar from "./components/Appbar/Appbar";
import DishForm from "./components/DishForm/DishForm";
import Dishes from "./components/Dishes/Dishes";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import {CartDish, Dish} from "./types";
import NewDish from "./components/NewDish/NewDish";
import Home from "./components/Home/Home";
import NewJuise from "./components/NewDish/NewJuise";

function App() {
  const [dishes, setDishes] = useState<Dish[]>([
    {id: '1', name: 'Plov', description: 'Very tasty pilaf', image: 'https://cdn.momsdish.com/wp-content/uploads/2021/06/Uzbek-Plov-Recipe-05-600x900.jpg', price: 250},
    {id: '2', name: 'Another plov', description: 'Also tasty pilaf', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Afghan_Palo.jpg/280px-Afghan_Palo.jpg', price: 350},
  ]);

  const addDish = (dish: Dish) => {
    setDishes(prevState => [...prevState, dish]);
  };

  const [location, setLocation] = useState('home');

  const [cartDishes, setCartDishes] = useState<CartDish[]>([]);
  const addDishToCart = (dish: Dish) => {
    setCartDishes((prevState) => {
      const existingIndex = prevState.findIndex(cartItem => {
        return cartItem.dish === dish;
      });

      if (existingIndex !== -1) {
        const itemsCopy = [...prevState];
        const itemCopy = {...itemsCopy[existingIndex]};
        itemCopy.amount++;
        itemsCopy[existingIndex] = itemCopy;
        return itemsCopy;
      } else {
        return [...prevState, {dish, amount: 1}];
      }
    });
  };

  let content = null;

  if (location === 'home') {
    content = (
        <Home
            dishes={dishes}
            addToCart={addDishToCart}
            cartDishes={cartDishes}
        />
    );
  } else if (location === 'new-dish') {
    content = (
        <NewDish onCreate={addDish}/>
    );
  }else if (location === 'new-juise') {
    content = (
        <NewJuise onCreate={addDish}/>
    );
  }

  return (
      <>
        <header>
          <Appbar changeLocation={setLocation}/>
        </header>
        <main className="container-fluid">
          {content}
        </main>
      </>
  );
}

export default App

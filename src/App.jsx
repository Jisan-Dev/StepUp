import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import data from "./db/data";
import Sidebar from "./components/Sidebar/Sidebar";
import Recommended from "./components/Recommended/Recommended";
import Card from "./components/UI/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const filteredItems = data.filter((product) => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  };
  console.log("render selectedCategory ", selectedCategory);
  console.log("render query ", query);

  const filteredProducts = (products, selected, query) => {
    let filteredProducts = products;

    // filter input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // apply selected filters
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} />
    ));
  };

  const result = filteredProducts(data, selectedCategory, query);

  return (
    <>
      <Navigation handleInputChange={handleInputChange} query={query} />
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
    </>
  );
}

export default App;

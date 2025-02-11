import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import data from "./db/data";
import Sidebar from "./components/Sidebar/Sidebar";
import Recommended from "./components/Recommended/Recommended";

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

  return (
    <>
      <Navigation handleInputChange={handleInputChange} query={query} />
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
    </>
  );
}

export default App;

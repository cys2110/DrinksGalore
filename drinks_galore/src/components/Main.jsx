import { Routes, Route } from "react-router-dom";
import DrinksDetails from "./Drinksdetails";
import Ingredients from "./Ingredients";
import IngredientDetails from "./IngredientDetails";
import Home from "./Home";
import { BASE_URL } from "../globals";
import Drinks from "./Drinks";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home apiCall={BASE_URL} />} />
        <Route path="/drinks" element={<Drinks apiCall={BASE_URL} />} />
        <Route
          path="/drinks/:id"
          element={<DrinksDetails apiCall={BASE_URL} />}
        />
        <Route
          path="/ingredients"
          element={<Ingredients apiCall={BASE_URL} />}
        />
        <Route
          path="/ingredients/:name"
          element={<IngredientDetails apiCall={BASE_URL} />}
        />
      </Routes>
    </div>
  );
}

import { useSelector } from "react-redux";
import { favoritesSelector } from "../../favorites/store/favoritesSelectors";

const MealNames = () => {
  const favorites = useSelector(favoritesSelector);

  return (
    <div>
      <h1>J'ai accès à la liste de recette</h1>
      {favorites.map((meals) => (
        <div key={meals}>{meals.strMeal}</div>
      ))}
    </div>
  );
};

export default MealNames;

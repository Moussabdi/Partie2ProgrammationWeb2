import { useQuery } from "@tanstack/react-query";
import MealService from "../service/MealService";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMeal } from "../store/mealSlice";
import FavoriteButton from "../../favorites/components/FavoriteButton/FavoriteButton";

const mealService = new MealService();

const Meal = () => {
  const params = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["meals", params.name],
    queryFn: () => mealService.getMealByCategory(params.name),
  });

  /*   console.log(params); */

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateMeal(data));
  }, [dispatch, data]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error.message} </div>;

  return (
    <div>
      <h1> Recette de la catégorie {params.name} : </h1>
      <Link to="/">Revenir aux catégories</Link>
      {data &&
        data.map((meals) => {
          return (
            <div key={meals.idMeal}>
              <FavoriteButton meals={meals} />
              {/* <Link to={`/mealDetail/${meals.idMeal}`}>
                { <img
                  src={meals.strMealThumb}
                  alt={meals.strMeal}
                  className=""
                /> }
                {meals.strMeal}
              </Link> */}
              <p>{meals.strMeal}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Meal;

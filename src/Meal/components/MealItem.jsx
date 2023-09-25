import { useQuery } from "@tanstack/react-query";
import MealDetailService from "../service/MealDetailService";
import { Link, useParams } from "react-router-dom";

const mealDetailService = new MealDetailService();

const MealItem = () => {
  const params = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["meals", params.id],
    queryFn: () => mealDetailService.getMealDetailById(params.id),
  });

  /*   console.log(params); */

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error.message} </div>;

  return (
    <div>
      <h1> Détail de la recette : {params.id} : </h1>

      {data &&
        data.map((meals) => {
          return (
            <div key={meals.idMeal}>
              <p>{meals.strMeal}</p>
              <p>{meals.strInstructions}</p>
              <Link to={`/category/${meals.strCategory}`}>
                Revenir à la page de la catégorie
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default MealItem;

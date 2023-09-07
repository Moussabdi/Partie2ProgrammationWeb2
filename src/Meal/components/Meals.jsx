import { useQuery } from "@tanstack/react-query";
import MealService from "../service/MealService";
import { Link } from "react-router-dom";

const mealService = new MealService();

const Meals = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => mealService.getAllCategoriesOfMeal(),
  });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error.message} </div>;
  return (
    <div>
      {data &&
        data.map((categories) => {
          return (
            <div className="grid grid-cols-4 " key={categories.strCategory}>
              <Link to={`/categories/${categories.idCategory}`}>
                <h2>{categories.strCategory}</h2>
              </Link>
              <p>{categories.strCategoryDescription}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Meals;

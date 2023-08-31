import { useQuery } from "@tanstack/react-query";
import MealService from "../service/MealService";

const mealService = new MealService();

const Meal = () => {
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
            <div key={categories.strCategory}>
              <h2>{categories.strCategory}</h2>
              <p>{categories.strCategoryDescription}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Meal;

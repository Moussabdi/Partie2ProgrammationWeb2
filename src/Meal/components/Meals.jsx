import { useQuery } from "@tanstack/react-query";
import MealsService from "../service/MealsService";
import { Link } from "react-router-dom";

const mealsService = new MealsService();

const Meals = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => mealsService.getAllCategoriesOfMeal(),
  });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error.message} </div>;
  return (
    <div>
      {data &&
        data.map((category) => {
          return (
            <div
              className="grid grid-cols-4 columns-3xs"
              key={category.idCategory}
            >
              <Link to={`/category/${category.strCategory}`}>
                <h2>{category.strCategory}</h2>
              </Link>
              <p>{category.strCategoryDescription}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Meals;

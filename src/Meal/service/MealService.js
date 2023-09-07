import { config } from "../../config";

class MealService {
  endpoint = "categories";
  baseUrl = config.baseUrl;
  mealUrl = `${this.baseUrl}/${this.endpoint}`;

  async getAllCategoriesOfMeal() {
    const res = await fetch(this.baseUrl);
    if (!res.ok) throw new Error();
    const data = await res.json();

    return data.categories;
  }

  async getAllCategoriesOfMealById(idCategory) {
    const res = await fetch(`${this.mealUrl}/${idCategory}`);
    if (!res.ok) throw new Error();
    return await res.json();
  }
}
export default MealService;

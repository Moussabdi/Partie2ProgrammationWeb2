import { config } from "../../config";

class MealService {
  endpoint = "/meal";
  baseUrl = config.baseUrl;
  mealUrl = `${this.baseUrl}/${this.endpoint}`;

  async getAllCategoriesOfMeal() {
    const res = await fetch(this.baseUrl);
    if (!res.ok) throw new Error();
    const data = await res.json();
    console.log(data);
    return data.categories;
  }

  async getAllCategoriesOfMealById(id) {
    const res = await fetch(`${this.mealUrl}/${id}`);
    if (!res.ok) throw new Error();
    return await res.json();
  }
}
export default MealService;

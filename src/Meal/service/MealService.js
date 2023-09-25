import { config } from "../../config";

class MealService {
  endpoint = "/filter.php?c";
  baseUrl = config.baseUrl;

  async getMealByCategory(category) {
    const res = await fetch(`${this.baseUrl}/${this.endpoint}=${category}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data.meals;
  }
}
export default MealService;

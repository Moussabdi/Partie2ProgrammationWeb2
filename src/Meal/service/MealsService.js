import { config } from "../../config";

class MealsService {
  endpoint = "/categories.php";
  baseUrl = config.baseUrl;

  async getAllCategoriesOfMeal() {
    const res = await fetch(`${this.baseUrl}/${this.endpoint}`);
    if (!res.ok) throw new Error();
    const data = await res.json();

    return data.categories;
  }
}
export default MealsService;

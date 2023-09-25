import { config } from "../../config";

class MealDetailService {
  endpoint = "/lookup.php?i";
  baseUrl = config.baseUrl;

  async getMealDetailById(id) {
    const res = await fetch(`${this.baseUrl}/${this.endpoint}=${id}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data.meals;
  }
}
export default MealDetailService;

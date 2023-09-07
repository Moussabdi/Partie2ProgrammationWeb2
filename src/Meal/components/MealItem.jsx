import React from "react";

const MealItem = (takeMeal) => {
  console.log(takeMeal.data);
  return (
    <div>
      <img src={takeMeal.data.strMealThumb} />
      <div>
        <span>{takeMeal.data.strMeal}</span>
        <p>{takeMeal.data.strArea} Food</p>
      </div>
      <div>
        <span>Recipe</span>
        <p>{takeMeal.data.strInstructions}</p>
        <img src={takeMeal.data.strMealThumb} />
      </div>
    </div>
  );
};

export default MealItem;

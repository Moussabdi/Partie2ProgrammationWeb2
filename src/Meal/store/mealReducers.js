const reducers = {
  updateMeal: (state, action) => {
    if (action.payload && action.payload.meals) {
      state.categories = action.payload.meals;
    }

    return state;
  },
};

export default reducers;

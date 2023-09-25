import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import Meals from "./Meal/components/Meals";
import Meal from "./Meal/components/Meal";
import MealItem from "./Meal/components/MealItem";
import { Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Meals />}></Route>
          <Route path="/category/:name" element={<Meal />}></Route>
          <Route path="/mealdetail/:id" element={<MealItem />}></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import Meals from "./Meal/components/Meals";
import Meal from "./Meal/components/Meal";
import { Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Meals />}></Route>
          <Route path="/categories/:idCategory" element={<Meal />}></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import Meal from "./Meal/components/Meal";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Meal />
        <ReactQueryDevtoolsPanel />
      </QueryClientProvider>
    </>
  );
}

export default App;

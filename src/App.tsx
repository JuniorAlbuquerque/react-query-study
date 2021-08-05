import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Pokemons from "./components/Pokemons";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>Pokedex with React Query</h1>
        <Pokemons />
      </div>
    </QueryClientProvider>
  );
}

export default App;

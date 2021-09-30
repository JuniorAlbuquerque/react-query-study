import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Pokemons from "./components/Pokemons";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h4>Pokedex with React Query - (Teste) - v1</h4>
        <p style={{ marginBottom: 38 }}>Developed by: Jnr Albuquerque</p>
        <Pokemons />
      </div>
    </QueryClientProvider>
  );
}

export default App;

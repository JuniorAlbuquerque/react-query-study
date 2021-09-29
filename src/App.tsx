import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Pokemons from "./components/Pokemons";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>Pokedex with React Query - v1</h1>
        <p style={{ marginBottom: 34 }}>Developed by: Jnr</p>
        <Pokemons />
      </div>
    </QueryClientProvider>
  );
}

export default App;

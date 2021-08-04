import React, { useState } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Pokemons from './components/Pokemons/intex';

const queryClient = new QueryClient();

function App() {
  const [showList, setShowList] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShowList(true)}>Show Pokemon List</button>
      {
        showList && 
        <Pokemons onClose={() => setShowList(false)} />
      }
    </QueryClientProvider>
  );
}

export default App;

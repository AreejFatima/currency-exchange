import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Converter from "./Components/Converter/Converter";


function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Converter />
      </QueryClientProvider>
    </div>
  );
}

export default App;

import "./App.css";
import Router from "./shared/Router";
import { ToastContainer } from "react-toastify";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <ToastContainer />
      <Router />
    </PokemonProvider>
  );
}

export default App;

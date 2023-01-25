import "./App.scss";
import { GlobalProvider } from "./components/GlobalProvider/GlobalProvider";
import { Main } from "./components/Main/Main";
import { ParticlesBackground } from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  return (
    <>
      <GlobalProvider>
        <Main />
      </GlobalProvider>

      <div role="img" aria-label="Flying stars background">
        <ParticlesBackground />
      </div>
    </>
  );
}

export default App;

import "./App.scss";
import { GlobalProvider } from "./components/GlobalProvider/GlobalProvider";
import { Main } from "./components/Main/Main";
import { ParticlesBackground } from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  return (
    <>
      <div role="img">
        <ParticlesBackground />
      </div>

      <GlobalProvider>
        <Main />
      </GlobalProvider>
    </>
  );
}

export default App;

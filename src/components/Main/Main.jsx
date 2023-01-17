import "./Main.scss";
import { Header } from "../Header/Header";
import { MobileNav } from "../MobileNav/MobileNav";
import { planetsInfo } from '../../api/planetsInfo';

const planetsNames = Object.keys(planetsInfo);

export const Main = () => {
  return (
    <main className="Main">
      <Header />
      <MobileNav planets={planetsNames} />
      d
      fvdfvd
    </main>
  );
};

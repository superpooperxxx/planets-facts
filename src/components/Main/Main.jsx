import "./Main.scss";
import { Header } from "../Header/Header";
import { MobileNav } from "../MobileNav/MobileNav";
import { useState } from "react";
import { PageContent } from "../PageContent/PageContent";

export const Main = () => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  const handleMobileNav = () => {
    setIsMobileNavOpened(currentState => !currentState);
  };

  return (
    <main className="Main">
      <Header handleMobileNav={handleMobileNav} />

      {/* To be hidden on Tablet+ resolution */}
      <MobileNav
        isOpened={isMobileNavOpened}
        close={setIsMobileNavOpened}
      />

      <PageContent />
    </main>
  );
};

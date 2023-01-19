import "./Main.scss";
import { Header } from "../Header/Header";
import { MobileNav } from "../MobileNav/MobileNav";
import { useContext, useState } from "react";
import { PageContent } from "../PageContent/PageContent";
import { GlobalContext } from "../GlobalProvider/GlobalProvider";

export const Main = () => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const { isMobile } = useContext(GlobalContext);

  const handleMobileNav = () => {
    setIsMobileNavOpened(currentState => !currentState);
  };

  return (
    <main className="Main">
      <Header
        isOpened={isMobileNavOpened}
        handleMobileNav={handleMobileNav}
      />

      {(isMobileNavOpened && isMobile) && (
        <MobileNav
          isOpened={isMobileNavOpened}
          close={setIsMobileNavOpened}
        />
      )}

      <PageContent />
    </main>
  );
};

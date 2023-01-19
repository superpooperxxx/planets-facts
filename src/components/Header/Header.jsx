import cn from 'classnames';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import { Nav } from "../Nav/Nav";
import "./Header.scss";

export const Header = ({ isOpened, handleMobileNav }) => {
  const { isMobile } = useContext(GlobalContext);

  return (
    <header className="Header">
      <div className="Container Header__Container">
        <a href="/" className="Header__Logo">
          The planets
        </a>

        {!isMobile && <Nav />}

        {isMobile && (
          <button
            type="button"
            className={cn(
              'Header__Menu-btn',
              {
                'Header__Menu-btn--active': isOpened,
              }
            )}
            aria-label="button to open navigation"
            onClick={handleMobileNav}
          ></button>
        )}
      </div>
    </header>
  );
};

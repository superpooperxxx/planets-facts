import { useContext } from 'react';
import cn from 'classnames';
import { GlobalContext } from '../GlobalProvider/GlobalProvider';
import { Nav } from "../Nav/Nav";
import "./Header.scss";
import { HeaderLogo } from './HeaderLogo';

export const Header = ({ isOpened, handleMobileNav }) => {
  const { isMobile } = useContext(GlobalContext);

  return (
    <header className="Header">
      <div className="Container Header__Container">
        <HeaderLogo />

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

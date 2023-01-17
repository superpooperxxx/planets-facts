import cn from 'classnames';
import { Nav } from "../Nav/Nav";
import "./Header.scss";

export const Header = ({ opened, handleMobileNav, setPlanet }) => {
  return (
    <header className="Header">
      <div className="Container Header__Container">
        <a href="/" className="Header__Logo">
          The planets
        </a>

        <Nav setPlanet={setPlanet} />

        <button
          type="button"
          className={cn(
            'Header__Menu-btn',
            {
              'Header__Menu-btn--active': opened,
            }
          )}
          aria-label="button to open navigation"
          onClick={handleMobileNav}
        ></button>
      </div>
    </header>
  );
};

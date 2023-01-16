import cn from 'classnames';
import { Nav } from "../Nav/Nav";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="Header">
      <div className="Container Header__Container">
        <a href="/" className="Header__Logo">
          The planets
        </a>

        <Nav />

        <button
          type="button"
          className={cn(
            'Header__Menu-btn',
            {
              'Header__Menu-btn--active': false,
            }
          )}
          aria-label="button to open navigation"
        ></button>
      </div>
    </header>
  );
};
